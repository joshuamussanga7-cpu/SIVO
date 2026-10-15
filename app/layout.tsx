import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIVO — Earn. Explore. Evolve.",
  description:
    "Discover surveys, digital tasks, microjobs and other opportunities to earn online with SIVO.",
  applicationName: "SIVO",
  openGraph: {
    title: "SIVO — Earn. Explore. Evolve.",
    description: "A smarter way to discover online earning opportunities.",
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
      <body>{children}</body>
    </html>
  );
}