import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhasini Ramesh - Senior Frontend Developer",
  description: "Senior Frontend Developer with 9+ years of experience in Angular, React, and modern web technologies. Learning Agentic AI. Based in Berlin, Germany.",
  keywords: ["Frontend Developer", "Angular", "React", "TypeScript", "Web Development", "Berlin", "Agentic AI", "Senior Developer"],
  authors: [{ name: "Suhasini Ramesh" }],
  openGraph: {
    title: "Suhasini Ramesh - Senior Frontend Developer",
    description: "9+ years building scalable web applications. Learning Agentic AI and developing AI-powered solutions.",
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
