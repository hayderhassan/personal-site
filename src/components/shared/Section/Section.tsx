"use client";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "" }) => (
  <section className={`max-w-5xl mx-auto px-4 py-12 ${className}`}>{children}</section>
);
