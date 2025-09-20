import { ProjectList } from "@/components/content/ProjectList/ProjectList";
import { mockProjects } from "@/data/mockProjects";

export default function ProjectsPage() {
  const allTags = Array.from(new Set(mockProjects.flatMap((p) => p.tags ?? [])));
  console.log("TAGS:", allTags);

  return <ProjectList projects={mockProjects} availableTags={allTags} />;
}
