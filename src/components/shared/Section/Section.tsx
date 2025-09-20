"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", title }) => (
  <section className={`max-w-5xl mx-auto px-4 py-12 ${className}`}>
    {title && <h2 className="mb-4 text-xl font-semibold tracking-tight">{title}</h2>}
    {children}
  </section>
);
