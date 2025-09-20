"use client";

import { Card as ShadCard, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  href?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, href }) => (
  <ShadCard className="hover:shadow-md transition">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      {href && (
        <Button variant="link" asChild>
          <a href={href}>View Project →</a>
        </Button>
      )}
    </CardContent>
  </ShadCard>
);
