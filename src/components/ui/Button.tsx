// src/components/ui/Button.tsx

import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition";

  const variants = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800",

    secondary:
      "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}