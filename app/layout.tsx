import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ideasphere - Product Studio | We Design, Build & Scale Digital Products",
  description: "Ideasphere is a Product Studio that designs, builds, and scales digital products for startups and businesses. From AI-powered platforms to full-stack web apps — we ship.",
  keywords: ["product studio", "product development", "AI development", "web app development", "startup product", "India"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
