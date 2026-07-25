import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

interface EmailCardProps {
  email: {
    title: string;
    description: string;
    address: string;
    buttonLabel: string;
  };
}

export function EmailCard({ email }: EmailCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email.address);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center gap-5 text-center">

        <div className="rounded-full bg-slate-100 p-4">
          <Mail size={30} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            {email.title}
          </h2>

          <p className="mt-2 max-w-md text-slate-600">
            {email.description}
          </p>
        </div>

        <p className="font-mono text-lg text-slate-900">
          {email.address}
        </p>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}

          {copied ? "Copiado!" : email.buttonLabel}
        </button>

      </div>
    </section>
  );
}