import { render, screen } from "@testing-library/react";
import { ProjectList } from "@/components/content/ProjectList";
import { ProjectMeta } from "@/types/project";

const mockProjects: ProjectMeta[] = [{ title: "Test Project", description: "Just testing", tags: ["Test"] }];

describe("ProjectList", () => {
  it("renders project cards", () => {
    render(<ProjectList projects={mockProjects} availableTags={["Test"]} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders tag buttons", () => {
    render(<ProjectList projects={mockProjects} availableTags={["Test"]} />);
    expect(screen.getByRole("button", { name: "Test" })).toBeInTheDocument();
  });

  it("renders search input", () => {
    render(<ProjectList projects={mockProjects} availableTags={["Test"]} />);
    expect(screen.getByPlaceholderText("Search projects...")).toBeInTheDocument();
  });
});
