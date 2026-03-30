import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrompLint — AI Security Gateway for Prompt Injection & Jailbreak Defense",
  description:
    "PrompLint is an AI security platform that detects, scores, explains, and mitigates prompt injection and jailbreak attacks in real time. Protect your LLM applications with intelligent security policies.",
  keywords: [
    "prompt injection",
    "jailbreak defense",
    "LLM security",
    "AI safety",
    "prompt security",
    "AI gateway",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a14] text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
