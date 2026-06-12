import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Dwi Gunardi M — a Frontend Developer with experience at IBM Indonesia, specializing in React, Next.js, and enterprise web applications.",
  keywords: ["Dwi Gunardi M", "About", "Frontend Developer", "IBM Indonesia", "React Developer", "Work Experience"],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
