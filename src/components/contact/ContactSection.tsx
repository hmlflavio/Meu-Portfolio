// src/components/contact/ContactSection.tsx

import { ExternalLink } from "lucide-react";

import { Card } from "../ui/Card";
import { BrandIcon } from "../ui/BrandIcon";

import type { ContactLink } from "../../types/contact";

interface ContactSectionProps {
  title: string;
  links: ContactLink[];
}

export function ContactSection({
  title,
  links,
}: ContactSectionProps) {
  return (
    <Card>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition-all hover:border-slate-300 hover:bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <BrandIcon
                  name={link.icon}
                  size={22}
                />

                <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">
                        {link.name}
                    </span>

                    <span className="text-sm text-slate-500">
                        {link.username}
                    </span>
                </div>
              </div>

              <ExternalLink
                size={18}
                className="text-slate-400"
              />
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}