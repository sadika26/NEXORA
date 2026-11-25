import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexora | Enterprise Digital Solutions",
  description:
    "Transform your business with modern enterprise technology, headless CMS, CRM integration and workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}