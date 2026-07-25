// src/pages/Projects.tsx

import { FolderGit2, ExternalLink, Code } from "lucide-react";

import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <div className="flex flex-col gap-10 py-8">

      {/* Cabeçalho */}

      <section>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
          Meus Projetos
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
          Uma coleção de projetos desenvolvidos durante a faculdade, estudos e
          iniciativas pessoais.
        </p>

      </section>

      {/* Grid */}

      <section className="grid gap-6 md:grid-cols-2">

        {projectsData.map((project) => (

          <article
            key={project.id}
            className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white/60 p-6 shadow-sm transition hover:shadow-md"
          >

            {/* Categoria */}

            <div className="mb-4 flex items-center justify-between">

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {project.category}
              </span>

              <span
                className={`text-xs font-medium ${
                  project.status === "Concluído"
                    ? "text-emerald-600"
                    : "text-amber-600"
                }`}
              >
                {project.status}
              </span>

            </div>

            {/* Nome */}

            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">

              <FolderGit2 size={22} />

              {project.title}

            </h2>

            {/* Descrição */}

            <p className="mb-6 grow leading-relaxed text-slate-600">
              {project.description}
            </p>

            {/* Tecnologias */}

            <div className="mb-6 flex flex-wrap gap-2">

              {project.technologies.map((technology) => (

                <span
                  key={technology}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                >
                  {technology}
                </span>

              ))}

            </div>

            {/* Links */}

            <div className="mt-auto flex gap-5 border-t border-slate-100 pt-5">

              {project.github && (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >

                  <Code size={16} />

                  Código

                </a>

              )}

              {project.demo && (

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
                >

                  <ExternalLink size={16} />

                  Projeto

                </a>

              )}

            </div>

          </article>

        ))}

      </section>

    </div>
  );
}