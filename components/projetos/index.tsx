import { HoverEffect } from "./cards-projects";

export default function Projects() {
  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center py-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-8">
              <h1 className="font-title text-3xl uppercase text-white">meus projetos</h1>
            </div>

            {/* Grid de Projetos */}
            <div className="grid grid-cols-1 gap-8">
              <HoverEffect
                items={[
                  { title: "Desafio Única", description: "Desafio proposto pelo Centro Universitário Úniunica para verificar o desenvolvimento utilizando o framework NextJS e utilização de API.", link: "https://desafio-unica.vercel.app/" },
                  { title: "PurpleBee Game", description: "Jogo desenvolvido para o Centro Universitário Úniunica para uso em campanha, tendo como base jogos de sorte para ganhos de desconto (sem custo algum)", link: "https://purrple-bee-game.vercel.app/" },
                  { title: "Linktree", description: "Foi desenvolvido um Linktree em NextJS que contém sua imagem e o link de suas redes sociais (Para utilizações em Curriculum)", link: "https://hiagoroedel-links.vercel.app/" },
                  { title: "Site Emec Funip", description: "Site organizacional desenvolvido para o Centro Universitário Úniunica para validação do EMEC", link: "https://funip.uniunica.edu.br/" },
                  { title: "Desenvolvimento FrontEnd", description: "Site Clone desenvolvido para aprendizado próprio em Tailwind e NextJS (Sem funcionalidades)", link: "https://landing-page-clone-front-end.vercel.app/" },
                  { title: "Gerador de Planilhas", description: "Código desenvolvido para gerar planilhas de acordo com a collection do banco de dados, Banco Utilizado: MongoDb", link: "https://github.com/HiagoRoedel/GERADOR-DE-PLANILHAS-MONGODB" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
