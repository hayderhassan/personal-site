"use client";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        title="Hayder Hassan"
        subtitle="Versatile Software Engineer specializing in embedded systems, networking, and elegant design."
        ctaLabel="View Projects"
        onCtaClick={() => alert("CTA clicked!")}
      />
    </main>
  );
}
