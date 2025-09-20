import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "@/components/shared/Card";

describe("Card", () => {
  it("renders title and description", () => {
    render(<Card title="Test Project" description="This is a test." />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("This is a test.")).toBeInTheDocument();
  });

  it("renders link if href is provided", () => {
    render(<Card title="Test" description="Desc" href="/test" />);
    expect(screen.getByText("View Project →")).toHaveAttribute("href", "/test");
  });
});
