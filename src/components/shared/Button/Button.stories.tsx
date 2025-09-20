import { Button } from "@/components/shared/Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: {
    label: "Primary CTA",
    variant: "default",
  },
};

export const Secondary = {
  args: {
    label: "Secondary CTA",
    variant: "secondary",
  },
};

export const Link = {
  args: {
    label: "Link CTA",
    variant: "link",
  },
};
