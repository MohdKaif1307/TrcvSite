import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function BlogNew() {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const createPost = useMutation({
    mutationFn: async () => {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || slugify(title),
          excerpt,
          content,
          coverImage: coverImage || undefined,
          category: category || undefined,
          tags: tags || undefined,
          metaTitle: metaTitle || title,
          metaDescription: metaDescription || excerpt,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      return res.json();
    },
    onSuccess() {
      toast({ title: "Post published", description: "Your blog post is live." });
      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setCoverImage("");
      setCategory("");
      setTags("");
      setMetaTitle("");
      setMetaDescription("");
    },
    onError(error: any) {
      toast({ title: "Failed to publish", description: error?.message ?? "" });
    },
  });

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Create Blog Post</h1>
        <Card>
          <CardContent className="space-y-6 pt-6">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" value={slug} onChange={(e) => setSlug(slugify(e.target.value))} placeholder="auto-generated from title" />
            </div>
            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} />
            </div>
            <div>
              <Label htmlFor="content">Content (Markdown supported)</Label>
              <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={12} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="coverImage">Cover Image URL</Label>
                <Input id="coverImage" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input id="metaTitle" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Defaults to title" />
              </div>
            </div>
            <div>
              <Label htmlFor="metaDescription">Meta Description</Label>
              <Textarea id="metaDescription" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={3} placeholder="Defaults to excerpt" />
            </div>
            <Button onClick={() => createPost.mutate()} disabled={createPost.isPending} className="bg-gradient-trcv">
              {createPost.isPending ? "Publishing..." : "Publish"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


