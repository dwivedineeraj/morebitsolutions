import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuickContactFAB } from "@/components/QuickContactFAB";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "MoreBit Solutions | Enterprise Engineering",
  description: "Architecting the future of business operations through custom ERP, AI, and cloud ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased flex flex-col", inter.variable)}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <QuickContactFAB />
      </body>
    </html>
  );
}
