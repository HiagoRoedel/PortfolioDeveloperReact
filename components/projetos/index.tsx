import { HoverEffect } from "./cards-projects";

export default function Projects() {
  return (
    <>
      <div
        className="bg-black min-h-screen flex items-center justify-center py-20"
        id="projects"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center">

            {/* Título */}
            <div className="text-center mb-12">
              <span className="text-neutral-500 uppercase tracking-[0.3em] text-sm">
                Portfolio
              </span>

              <h1 className="font-title text-4xl md:text-5xl uppercase text-white mt-4 font-bold">
                Meus Projetos
              </h1>

              <p className="text-neutral-500 mt-4 max-w-2xl">
                Projetos próprios desenvolvidos com foco em performance,
                experiência do usuário e interfaces modernas.
              </p>
            </div>

            {/* Grid de Projetos */}
            <div className="grid grid-cols-1 gap-8 w-full">
              <HoverEffect
                items={[
                  {
                    title: "PDI - Landing Page",
                    description:
                      "Desafio proposto pelo Centro Universitário Úniunica utilizando NextJS e integração com API para validação técnica de desenvolvimento frontend.",
                    link: "https://perfect-card.vercel.app/",
                  },

                  {
                    title: "PurpleBee Game",
                    description:
                      "Jogo promocional desenvolvido para campanhas do Centro Universitário Úniunica, baseado em sorteios para concessão de descontos acadêmicos.",
                    link: "https://purrple-bee-game.vercel.app/",
                  },

                  {
                    title: "Linktree",
                    description:
                      "Projeto desenvolvido em NextJS para centralização de redes sociais e apresentação profissional em formato moderno e responsivo.",
                    link: "https://hiagoroedel-links.vercel.app/",
                  },

                  {
                    title: "Site E-MEC",
                    description:
                      "Site institucional desenvolvido para validação acadêmica junto ao sistema E-MEC.",
                    link: "https://funip.uniunica.edu.br/",
                  },

                  {
                    title: "Clone FrontEnd",
                    description:
                      "Landing page criada para estudos e aperfeiçoamento em TailwindCSS e NextJS.",
                    link: "https://landing-page-clone-front-end.vercel.app/",
                  },
                ]}
              />
            </div>

            {/* Experiências */}
            <div className="mt-24 w-full grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Úniunica */}
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Experiência Profissional
                </span>

                <h2 className="text-3xl font-bold text-white mt-4">
                  Centro Universitário Úniunica
                </h2>

                <p className="text-neutral-400 leading-relaxed mt-6">
                  Participação no desenvolvimento e manutenção do site
                  institucional educacional do Centro Universitário Úniunica,
                  atuando na criação de interfaces modernas, melhorias de
                  performance, responsividade e experiência do usuário.
                </p>

                <a
                  href="https://uniunica.edu.br/"
                  target="_blank"
                  className="inline-flex mt-6 text-white hover:text-neutral-300 transition"
                >
                  Acessar site →
                </a>
              </div>

              {/* Grupo Prominas */}
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
                <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                  Participações
                </span>

                <h2 className="text-3xl font-bold text-white mt-4">
                  Grupo Prominas
                </h2>

                <p className="text-neutral-400 leading-relaxed mt-6">
                  Participação e criação de plataformas e sites educacionais do
                  Grupo Prominas, incluindo projetos institucionais, páginas
                  acadêmicas, sistemas voltados ao E-MEC e ambientes digitais
                  focados em educação e captação de alunos.
                </p>

                <a
                  href="https://faculdadesprominas.com.br/"
                  target="_blank"
                  className="inline-flex mt-6 text-white hover:text-neutral-300 transition"
                >
                  Acessar site →
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}