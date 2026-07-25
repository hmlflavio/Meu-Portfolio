// src/components/ui/SectionTitle.tsx

import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 ${className}`}
    >
      {children}
    </h2>
  );
}