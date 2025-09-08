import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  eventType: text("event_type"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  company: true,
  email: true,
  phone: true,
  eventType: true,
  message: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Blog schema (logical only; stored in memory/serverless for now)
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  coverImage: text("cover_image"),
  category: text("category"),
  tags: text("tags"), // comma-separated for simplicity
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  excerpt: true,
  content: true,
  coverImage: true,
  category: true,
  tags: true,
  metaTitle: true,
  metaDescription: true,
}).extend({
  title: z.string().min(5, "Title is too short"),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers and dashes"),
  excerpt: z.string().min(30, "Excerpt should be at least 30 characters"),
  content: z.string().min(100, "Content should be at least 100 characters"),
  coverImage: z.string().url("Cover image must be a valid URL").optional().or(z.literal("")).transform(v => v || undefined),
  tags: z.string().optional(),
});

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
