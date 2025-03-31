import { db } from "@/db";
import { articles } from "@/db/schema";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";

export const revalidate = 60;

interface BlogPostProps {
  params: { id: string };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const article = await db
    .select()
    .from(articles)
    .where(eq(articles.id, Number(params.id)))
    .then((res) => res[0]);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}