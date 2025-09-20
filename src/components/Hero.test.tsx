import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders title and subtitle", () => {
    render(<Hero title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders CTA button and handles click", () => {
    const handleClick = vi.fn();
    render(<Hero title="CTA Test" ctaLabel="Click Me" onCtaClick={handleClick} />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
