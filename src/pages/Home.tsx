// src/pages/Home.tsx

import {
  Code,
  Globe,
  Mail,
  FolderOpen,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { homeData } from "../data/home";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";

export function Home() {
  const getHighlightIcon = (icon: string) => {
    switch (icon) {
      case "graduation":
        return <GraduationCap size={20} />;
      case "code":
        return <Code size={20} />;
      case "map-pin":
        return <MapPin size={20} />;
      default:
        return null;
    }
  };

  const getQuickLinkIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Code size={20} />;
      case "linkedin":
        return <Globe size={20} />;
      case "mail":
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-16 py-8">

      {/* Hero */}
      <section className="flex flex-col gap-6">

        <div className="w-28 h-28 rounded-full bg-slate-200 border-4 border-white shadow-lg flex items-center justify-center">
          FOTO
        </div>

        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            {homeData.hero.name}
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-700">
            {homeData.hero.title}
          </p>

          <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
            {homeData.hero.description}
          </p>

          <p className="mt-6 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            {homeData.hero.availability}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">

          {homeData.hero.buttons.map((button) => (
            <Button
                key={button.label}
                href={button.href}
                variant={
                button.label === "Ver Projetos"
                    ? "primary"
                    : "secondary"
                }
            >
                {button.label === "Ver Projetos" ? (
                <FolderOpen size={18} />
                ) : (
                <FileText size={18} />
                )}

                {button.label}
            </Button>
          ))}

        </div>

      </section>

      {/* Resumo + Contatos */}

      <section className="grid gap-6 md:grid-cols-2">

        <Card>

          <SectionTitle>
            Resumo Profissional
          </SectionTitle>

          <ul className="space-y-4">

            {homeData.highlights.map((item) => (

              <li
                key={item.text}
                className="flex items-center gap-3 text-slate-700"
              >
                <span className="text-slate-400">
                  {getHighlightIcon(item.icon)}
                </span>

                <span>{item.text}</span>

              </li>

            ))}

          </ul>

        </Card>

        <Card>

          <SectionTitle>
            Me Encontre
          </SectionTitle>

          <div className="space-y-5">

            {homeData.quickLinks.map((link) => (

              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-700 transition hover:text-slate-900"
              >

                {getQuickLinkIcon(link.icon)}

                <span>{link.name}</span>

              </a>

            ))}

          </div>

        </Card>

      </section>

      {/* Missão */}

      <section className="rounded-3xl border border-slate-100 bg-white/60 p-8 shadow-sm">

        <SectionTitle>
          Missão
        </SectionTitle>

        <p className="max-w-3xl leading-relaxed text-slate-600">
          {homeData.mission}
        </p>

      </section>

      {/* Galeria */}

      <section className="rounded-4xl bg-slate-900 p-10 text-white">

        <h2 className="mb-4 text-2xl font-bold">
          {homeData.galleryCallToAction.title}
        </h2>

        <p className="mb-8 max-w-2xl text-slate-300 leading-relaxed">
          {homeData.galleryCallToAction.description}
        </p>

        <Button
            href={homeData.galleryCallToAction.href}
            variant="secondary"
        >
            {homeData.galleryCallToAction.buttonLabel}
        </Button>

      </section>

    </div>
  );
}