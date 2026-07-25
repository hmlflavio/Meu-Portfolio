interface LanguageItemProps {
  language: string;
  level: string;
}

export function LanguageItem({
  language,
  level,
}: LanguageItemProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-4">

      <span className="font-medium text-slate-800">
        {language}
      </span>

      <span className="text-slate-500">
        {level}
      </span>

    </div>
  );
}