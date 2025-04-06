import { db } from "@/db";
import { articles } from "@/db/schema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await db.select().from(articles);
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch article:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }  
}
