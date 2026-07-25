import { ExternalLink } from "lucide-react";

import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

interface CertificationCardProps {
  title: string;
  institution: string;
  year: string;
  certificateUrl?: string;
}

export function CertificationCard({
  title,
  institution,
  year,
  certificateUrl,
}: CertificationCardProps) {
  return (
    <Card>

      <div className="flex h-full flex-col justify-between gap-6">

        <div className="space-y-2">

          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          <p className="text-slate-600">
            {institution}
          </p>

        </div>

        <div className="flex items-center justify-between">

          <Badge>
            {year}
          </Badge>

          {certificateUrl && (
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900"
            >
              Ver certificado

              <ExternalLink size={16} />
            </a>
          )}

        </div>

      </div>

    </Card>
  );
}