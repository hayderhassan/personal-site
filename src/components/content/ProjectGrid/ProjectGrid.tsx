"use client";
import { Section } from "@/components/shared/Section";

export const ProjectGrid: React.FC = () => (
  <Section>
    <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Replace with <Card /> components later */}
      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded shadow">Project A</div>
      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded shadow">Project B</div>
      <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded shadow">Project C</div>
    </div>
  </Section>
);
