import { ContactSection } from "../components/contact/ContactSection";
import { EmailCard } from "../components/contact/EmailCard";
import { ContactForm } from "../components/contact/ContactForm";

import { contactData } from "../data/contact";

export function Contact() {
  return (
    <div className="flex flex-col gap-12 py-8 animate-fade-in">
      {/* Cabeçalho */}
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {contactData.hero.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {contactData.hero.description}
        </p>
      </section>

      {/* Formulário */}
      <ContactForm form={contactData.form} />

      {/* E-mail */}
      <EmailCard email={contactData.email} />

      {/* Contatos profissionais */}
      <ContactSection
        title="Profissional"
        links={contactData.professional}
      />

      {/* Redes sociais */}
      <ContactSection
        title="Redes sociais"
        links={contactData.social}
      />

      {/* Rodapé */}
      <section className="text-center text-sm text-slate-500">
        {contactData.footer.text}
      </section>
    </div>
  );
}