"use client";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/content/Hero";

export default function Home() {
  return (
    <Hero
      title="Hayder Hassan"
      subtitle="Versatile Software Engineer specializing in embedded systems, networking, and elegant design."
      ctaLabel="View Projects"
      onCtaClick={() => alert("CTA clicked!")}
    />
  );
}
