import { ProjectMeta } from "@/types/project";

export const mockProjects: ProjectMeta[] = [
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
