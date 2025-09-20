import { ProjectList } from "@/components/content/ProjectList";
import { ProjectMeta } from "@/types/project";

const mockProjects: ProjectMeta[] = [
  {
    title: "Design System",
    description: "Reusable UI components with shadcn and Storybook.",
    tags: ["UI", "React"],
  },
  {
    title: "Portfolio Site",
    description: "Modular personal site with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "API Gateway",
    description: "Reverse proxy with caching and rate limiting.",
    tags: ["Networking", "Node.js"],
  },
];

export default {
  title: "Content/ProjectList",
  component: ProjectList,
};

export const Default = {
  args: {
    projects: mockProjects,
    availableTags: ["UI", "React", "Next.js", "Tailwind", "Networking", "Node.js"],
  },
};
