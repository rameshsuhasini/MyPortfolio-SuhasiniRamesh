import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suhasini Ramesh - Frontend Developer",
  description: "Frontend Developer with 9+ years of experience in Angular, React, and modern web technologies. Based in Berlin, Germany.",
  keywords: ["Frontend Developer", "Angular", "React", "TypeScript", "Web Development", "Berlin"],
  authors: [{ name: "Suhasini Ramesh" }],
  openGraph: {
    title: "Suhasini Ramesh - Frontend Developer",
    description: "Frontend Developer with 9+ years of experience",
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
