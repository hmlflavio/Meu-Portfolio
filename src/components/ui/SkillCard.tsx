import { Badge } from "./Badge";
import { Card } from "./Card";

interface SkillCardProps {
  title: string;
  items: string[];
}

export function SkillCard({
  title,
  items,
}: SkillCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-4">

        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Badge key={item}>
              {item}
            </Badge>
          ))}
        </div>

      </div>
    </Card>
  );
}