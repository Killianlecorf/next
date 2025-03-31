import { db } from "@/db";
import { articles } from "@/db/schema";
import Link from "next/link";

export default async function BlogPage() {
  const allArticles = await db.select().from(articles);

  return (
    <div>
      <h1>Liste des articles</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.id}>
            <Link href={`/blog/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}