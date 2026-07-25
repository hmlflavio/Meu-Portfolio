// src/pages/Career.tsx

import { FileText } from "lucide-react";
import { careerData } from "../data/career";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Badge } from "../components/ui/Badge";
import { SkillCard } from "../components/ui/SkillCard";
import { CertificationCard } from "../components/career/CertificationCard";
import { LanguageItem } from "../components/career/LanguageItem";

export function Career() {
  return (
    <div className="flex flex-col gap-16 py-8 animate-fade-in">

      {/* Hero */}

      <section className="flex flex-col gap-6">

        <div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {careerData.title}
          </h1>

          <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
            {careerData.description}
          </p>

        </div>

        <div>

          <Button
            href={careerData.resumeUrl}
            variant="primary"
            external
          >
            <FileText size={18} />
            Baixar Currículo
          </Button>

        </div>

      </section>
        {/* Formação Acadêmica */}

      <section>

        <SectionTitle>
            Formação Acadêmica
        </SectionTitle>

        <div className="flex flex-col gap-6">

            {careerData.education.map((education) => (

            <Card key={education.institution}>

                <div className="flex flex-col gap-2">

                <h3 className="text-xl font-semibold text-slate-900">
                    {education.institution}
                </h3>

                <p className="font-medium text-slate-700">
                    {education.course}
                </p>

                <div className="flex flex-wrap items-center gap-3">

                    <span className="text-sm text-slate-500">
                        {education.period}
                    </span>

                    <Badge>
                        {education.status}
                    </Badge>

                </div>

                <p className="pt-3 leading-relaxed text-slate-600">
                    {education.description}
                </p>

                </div>

            </Card>

            ))}

        </div>

      </section>
      <section>

        <SectionTitle>
            Cursos & Certificações
        </SectionTitle>

        <div className="grid gap-6 md:grid-cols-2">

            {careerData.certifications.map((certification) => (

            <CertificationCard
                key={certification.title}
                title={certification.title}
                institution={certification.institution}
                year={certification.year}
                certificateUrl={certification.certificateUrl}
            />

            ))}

        </div>

      </section>
      <section>

        <SectionTitle>
            Competências Técnicas
        </SectionTitle>

            <div className="grid gap-6 md:grid-cols-2">

                <SkillCard
                title="Linguagens"
                items={careerData.skills.languages}
                />

                <SkillCard
                title="Front-end"
                items={careerData.skills.frontend}
                />

                <SkillCard
                title="Back-end"
                items={careerData.skills.backend}
                />

                <SkillCard
                title="Banco de Dados"
                items={careerData.skills.databases}
                />

                <SkillCard
                title="Ferramentas"
                items={careerData.skills.tools}
                />

            </div>

      </section>
      <section>

        <SectionTitle>
            Idiomas
        </SectionTitle>

        <Card>

            {careerData.languages.map((language) => (

            <LanguageItem
                key={language.language}
                language={language.language}
                level={language.level}
            />

            ))}

        </Card>

        </section>
    </div>
  );
}