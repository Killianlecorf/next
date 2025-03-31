"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, { message: "Le nom doit contenir au moins 3 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
});

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validation = contactSchema.safeParse(formData);

      if (!validation.success) {
        validation.error.errors.forEach((error) => {
          toast.error(error.message);
        });
        setLoading(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Formulaire envoyé avec succès !");
      } else {
        if (result.errors && result.errors.length > 0) {
          result.errors.forEach((error: string) => toast.error(error));
        } else {
          toast.error("Une erreur inconnue est survenue.");
        }
      }
    } catch (err) {
      toast.error("Une erreur est survenue lors de l'envoi.");
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="message" className="block">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
