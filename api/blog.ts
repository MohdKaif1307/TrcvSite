import { insertBlogPostSchema } from "../shared/schema";
import { randomUUID } from "crypto";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category?: string;
  tags?: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: Date;
  updatedAt: Date;
};

const posts = new Map<string, BlogPost>();

function list(): BlogPost[] {
  return Array.from(posts.values()).sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
  );
}

function getBySlug(slug: string): BlogPost | undefined {
  return list().find((p) => p.slug === slug);
}

export default async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const method = req.method;

  try {
    if (method === "GET") {
      const slug = url.searchParams.get("slug");
      if (slug) {
        const found = getBySlug(slug);
        if (!found) {
          return new Response("Not found", { status: 404 });
        }
        return Response.json(found);
      }
      return Response.json(list());
    }

    if (method === "POST") {
      const json = await req.json();
      const data = insertBlogPostSchema.parse(json);
      if (getBySlug(data.slug)) {
        return new Response(
          JSON.stringify({ message: "Slug already exists" }),
          { status: 409, headers: { "Content-Type": "application/json" } },
        );
      }
      const now = new Date();
      const entity: BlogPost = {
        id: randomUUID(),
        createdAt: now,
        updatedAt: now,
        ...data,
      };
      posts.set(entity.id, entity);
      return Response.json(entity, { status: 201 });
    }

    return new Response("Method not allowed", { status: 405 });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ message: e?.message ?? "Invalid payload" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }
}


