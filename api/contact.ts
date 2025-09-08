import { insertContactSubmissionSchema } from "../shared/schema";
import { z } from "zod";
import { randomUUID } from "crypto";

type ContactSubmission = {
  id: string;
  name: string;
  company?: string | null;
  email: string;
  phone: string;
  eventType?: string | null;
  message: string;
  createdAt: Date;
};

const submissionsStore: Map<string, ContactSubmission> = new Map();

async function createSubmission(data: Omit<ContactSubmission, "id" | "createdAt">) {
  const id = randomUUID();
  const submission: ContactSubmission = { ...data, id, createdAt: new Date() };
  submissionsStore.set(id, submission);
  return submission;
}

async function listSubmissions() {
  return Array.from(submissionsStore.values()).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST" && req.method !== "GET") {
    return new Response(
      JSON.stringify({ success: false, message: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    if (req.method === "POST") {
      const body = await req.json();
      const validated = insertContactSubmissionSchema.parse(body);
      const submission = await createSubmission(validated);
      return new Response(
        JSON.stringify({
          success: true,
          message:
            "Thank you for your message! We will get back to you soon.",
          data: { id: submission.id },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }

    // GET
    const submissions = await listSubmissions();
    return new Response(
      JSON.stringify({ success: true, data: submissions }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ success: false, message: "Validation failed", errors: error.errors }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}


