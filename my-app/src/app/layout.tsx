import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Mon Site",
  description: "Exemple de site avec Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}
