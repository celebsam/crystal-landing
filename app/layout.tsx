import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crystal Kizor — Architect, Designer & Entrepreneur",
  description:
    "Explore Crystal Kizor’s world of architecture, contemporary African design, education, research and purpose. Different expressions. One connected vision.",
  openGraph: {
    title: "Crystal Kizor — Spaces. Ideas. Possibilities.",
    description:
      "An architect, designer and entrepreneur building spaces, ideas and opportunities. Discover her seven interconnected initiatives.",
    type: "website",
    siteName: "Crystal Kizor",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
