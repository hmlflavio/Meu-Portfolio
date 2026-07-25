import { Send } from "lucide-react";

interface ContactFormProps {
  form: {
    title: string;
    description: string;
    submitLabel: string;
  };
}

export function ContactForm({ form }: ContactFormProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900">
          {form.title}
        </h2>

        <p className="mt-2 text-slate-600">
          {form.description}
        </p>
      </div>

      <form className="flex flex-col gap-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Nome
          </label>

          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            E-mail
          </label>

          <input
            id="email"
            type="email"
            placeholder="voce@email.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Mensagem
          </label>

          <textarea
            id="message"
            rows={6}
            placeholder="Escreva sua mensagem..."
            className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-900"
          />
        </div>

        <button
          type="submit"
          className="flex w-fit items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
        >
          <Send size={18} />
          {form.submitLabel}
        </button>
      </form>
    </section>
  );
}