import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhasini Ramesh Portfolio",
  description: "Senior Software Developer with 10+ years of experience in Angular, React, and modern web technologies. Learning Agentic AI. Based in Berlin, Germany.",
  keywords: ["Software Developer", "Angular", "React", "TypeScript", "Web Development", "Berlin", "Agentic AI", "Senior Developer"],
  authors: [{ name: "Suhasini Ramesh" }],
  openGraph: {
    title: "Suhasini Ramesh Portfolio",
    description: "10+ years building scalable web applications. Learning Agentic AI and developing AI-powered solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
