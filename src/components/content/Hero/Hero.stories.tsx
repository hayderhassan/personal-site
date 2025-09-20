import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@/components/content/Hero";

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: "Components/Hero",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: "Welcome to My Site",
    subtitle: "This is a modular, recruiter-optimized component.",
    ctaLabel: "Get Started",
  },
};

export const Minimal: Story = {
  args: {
    title: "Hello World",
  },
};
