import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning";
}

export function Badge({
  children,
  variant = "default",
}: BadgeProps) {

  const variants = {
    default:
      "bg-slate-100 text-slate-700 border border-slate-200",

    success:
      "bg-emerald-100 text-emerald-700 border border-emerald-200",

    warning:
      "bg-amber-100 text-amber-700 border border-amber-200",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        transition-all
        duration-200
        hover:scale-105
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}