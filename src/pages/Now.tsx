// src/pages/Now.tsx

import { nowData } from "../data/now";

import { SectionTitle } from "../components/ui/SectionTitle";
import { NowSection } from "../components/now/NowSection";
import { Card } from "../components/ui/Card";

export function Now() {
  return (
    <div className="flex flex-col gap-12 py-8 animate-fade-in">

      {/* Hero */}

      <section className="flex flex-col gap-4">

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {nowData.hero.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          {nowData.hero.description}
        </p>

      </section>

      {/* Seções */}

      <section className="grid gap-6">

        {nowData.sections.map((section) => (

          <NowSection
            key={section.title}
            icon={section.icon}
            title={section.title}
            description={section.description}
            items={section.items}
          />

        ))}

      </section>

      {/* Live */}

      <section>

        <SectionTitle>
          Live
        </SectionTitle>

        <Card>

          <div className="flex flex-col gap-4">

            <p className="text-slate-700 leading-relaxed">

              Esta seção será integrada futuramente com APIs para mostrar
              informações atualizadas automaticamente.

            </p>

            <ul className="flex flex-col gap-3 text-slate-600">

              <li>🎵 Música tocando no Spotify</li>

              <li>📊 Resumo semanal do Last.fm</li>

              <li>🌤 Clima atual em São José dos Campos</li>

              <li>🕒 Horário local</li>

            </ul>

          </div>

        </Card>

      </section>

    </div>
  );
}