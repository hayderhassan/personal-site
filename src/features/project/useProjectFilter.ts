import { useMemo } from "react";
import { ProjectMeta } from "@/types/project";

export function useProjectFilter(projects: ProjectMeta[], activeTag: string | null) {
  return useMemo(() => {
    if (!activeTag) return projects;

    return projects.filter((project) => project.tags?.includes(activeTag));
  }, [projects, activeTag]);
}
