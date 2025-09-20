"use client";
import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaLabel, onCtaClick }) => (
  <section className="text-center py-16 px-4 bg-zinc-100 dark:bg-zinc-900">
    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h1>
    {subtitle && <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">{subtitle}</p>}
    {ctaLabel && (
      <button
        onClick={onCtaClick}
        className="mt-6 px-6 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition"
      >
        {ctaLabel}
      </button>
    )}
  </section>
);
