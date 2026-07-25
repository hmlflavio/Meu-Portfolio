// src/components/ui/Card.tsx

import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-100 bg-white/60 p-8 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}