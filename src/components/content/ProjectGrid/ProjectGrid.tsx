import { ProjectMeta } from "@/types/project";
import { Card as ProjectCard } from "@/components/shared/Card";

interface ProjectGridProps {
  projects: ProjectMeta[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
