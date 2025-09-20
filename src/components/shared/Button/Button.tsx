"use client";

import { Button as ShadButton } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "default" | "secondary" | "link";
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "default" }) => (
  <ShadButton variant={variant} onClick={onClick}>
    {label}
  </ShadButton>
);
