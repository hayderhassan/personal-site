import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "@/components/shared/Button";

describe("Button", () => {
  it("renders label", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("handles click", () => {
    const handler = vi.fn();
    render(<Button label="Click" onClick={handler} />);
    fireEvent.click(screen.getByText("Click"));
    expect(handler).toHaveBeenCalled();
  });
});
