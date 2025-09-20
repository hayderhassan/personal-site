import { useMemo } from "react";
import { ProjectMeta } from "@/types/project";

export function useProjectSearch(projects: ProjectMeta[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  return useMemo(() => {
    if (!normalizedQuery) return projects;

    return projects.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(normalizedQuery);
      const descMatch = project.description.toLowerCase().includes(normalizedQuery);
      const tagMatch = project.tags?.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return titleMatch || descMatch || tagMatch;
    });
  }, [projects, normalizedQuery]);
}
