import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertBlogPostSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      res.json({
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
        data: { id: submission.id }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form"
        });
      }
    }
  });

  // Get contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve contact submissions"
      });
    }
  });

  // Blog endpoints (memory store in dev/prod without DB)
  const blogPosts = new Map<string, any>();
  function listPosts() {
    return Array.from(blogPosts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
    );
  }

  app.get("/api/blog", async (req, res) => {
    const slug = req.query.slug as string | undefined;
    if (slug) {
      const post = listPosts().find((p) => p.slug === slug);
      if (!post) return res.status(404).json({ message: "Not found" });
      return res.json(post);
    }
    res.json(listPosts());
  });

  app.post("/api/blog", async (req, res) => {
    try {
      const data = insertBlogPostSchema.parse(req.body);
      if (listPosts().some((p) => p.slug === data.slug)) {
        return res.status(409).json({ message: "Slug already exists" });
      }
      const now = new Date();
      const id = `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`;
      const post = { id, createdAt: now, updatedAt: now, ...data };
      blogPosts.set(id, post);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation failed", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to create post" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
