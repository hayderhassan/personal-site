"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { ProjectMeta } from "@/types/project";
import { useProjectSearch } from "@/features/project/useProjectSearch";
import { useProjectFilter } from "@/features/project/useProjectFilter";
import { ProjectGrid } from "@/components/content/ProjectGrid/ProjectGrid";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/shared/Button";

interface ProjectListProps {
  projects: ProjectMeta[];
  availableTags: string[];
}

export function ProjectList({ projects, availableTags }: ProjectListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTag = searchParams.get("tag");

  const filtered = useProjectFilter(projects, activeTag);
  const searched = useProjectSearch(filtered, searchQuery);

  const handleTagClick = (tag: string) => {
    const newTag = tag === activeTag ? null : tag;
    const query = newTag ? `?tag=${encodeURIComponent(newTag)}` : "";
    router.push(`/projects${query}`);
  };

  return (
    <Section title="Projects">
      <div className="mb-6 flex flex-wrap gap-2">
        {availableTags.map((tag) => (
          <Button
            key={tag}
            variant={tag === activeTag ? "default" : "outline"}
            onClick={() => handleTagClick(tag)}
            className="rounded-full px-4 py-1 text-sm"
          >
            {tag}
          </Button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6 w-full rounded-md border px-4 py-2 text-sm"
      />

      <ProjectGrid projects={searched} />
    </Section>
  );
}
