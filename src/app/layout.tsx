// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Aviary Bird Conservation",
  description: "Konservasi burung untuk menjaga habitat dan mencegah kepunahan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="text-gray-800 bg-white">
        <Header />
        <Hero />
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
}
