import { db } from "@/db";
import { articles } from "@/db/schema";
import { NextApiRequest, NextApiResponse } from "next";
import { eq } from "drizzle-orm";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const data = await db.select().from(articles).where(eq(articles.id, Number(id)));
    if (!data.length) return res.status(404).json({ error: "Article non trouvé" });

    res.status(200).json(data[0]);
  } catch (error) {
    console.error("Failed to fetch article:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }  
}