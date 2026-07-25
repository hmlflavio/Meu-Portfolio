// src/components/now/NowSection.tsx

import {
  BookOpen,
  Rocket,
  Target,
  Music,
} from "lucide-react";

import { Card } from "../ui/Card";

interface NowSectionProps {
  icon: "book" | "rocket" | "target" | "music";
  title: string;
  description?: string;
  items: string[];
}

export function NowSection({
  icon,
  title,
  description,
  items,
}: NowSectionProps) {

  const icons = {
    book: BookOpen,
    rocket: Rocket,
    target: Target,
    music: Music,
  };

  const Icon = icons[icon];

  return (
    <Card>

      <div className="flex flex-col gap-5">

        <div className="flex items-center gap-3">

          <Icon
            size={22}
            className="text-slate-700"
          />

          <h2 className="text-xl font-semibold">
            {title}
          </h2>

        </div>

        {description && (
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>
        )}

        <ul className="flex flex-col gap-3">

          {items.map((item) => (

            <li
              key={item}
              className="text-slate-700"
            >
              • {item}
            </li>

          ))}

        </ul>

      </div>

    </Card>
  );
}