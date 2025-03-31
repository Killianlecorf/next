import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
});