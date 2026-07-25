import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "K-Drift Admin",
  robots: { index: false, follow: false },
};

// Separate root layout for the non-localized internal admin tool.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={geistSans.variable}>
      <body className="min-h-svh bg-muted/30 antialiased">{children}</body>
    </html>
  );
}
