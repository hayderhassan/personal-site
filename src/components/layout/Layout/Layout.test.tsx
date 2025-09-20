import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Layout } from "@/components/layout/Layout";

describe("Layout", () => {
  it("renders children and layout structure", () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>,
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Hayder Hassan")).toBeInTheDocument();
  });
});
