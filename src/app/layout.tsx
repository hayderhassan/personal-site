import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Layout } from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayder Hassan",
  description: "Showcasing embedded systems, full-stack projects, and elegant design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
