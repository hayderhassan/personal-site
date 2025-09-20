"use client";

import { Button as ShadButton } from "@/components/ui/button";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "default", children, className }) => (
  <ShadButton variant={variant} onClick={onClick} className={className}>
    {label ?? children}
  </ShadButton>
);
