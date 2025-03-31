import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    contactSchema.parse(data);

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        errors: err.errors.map((e) => e.message),
      });
    }

    return NextResponse.json({ success: false, errors: ["Une erreur est survenue."] });
  }
}
