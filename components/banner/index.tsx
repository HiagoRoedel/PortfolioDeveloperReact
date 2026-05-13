'use client'

import Image from "next/image";

export function BannerHome() {

    const handleScrollProjects = () => {
        const section = document.getElementById("projects");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="relative flex h-screen w-full items-center overflow-hidden bg-black z-10">
            <div className="container relative z-10 mx-auto px-6">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    {/* Text */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <span className="mb-4 rounded-full border border-neutral-800 bg-neutral-900 px-4 py-1 text-sm text-neutral-400">
                            Full Stack Developer
                        </span>

                        <h1 className="bg-gradient-to-b from-white via-neutral-300 to-neutral-700 bg-clip-text py-4 text-6xl font-black tracking-tight text-transparent md:text-8xl lg:text-9xl">
                            Hiago
                            <br />
                            Roedel
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
                            Criando experiências digitais modernas, performáticas
                            e minimalistas com foco em design, performance e escalabilidade.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={handleScrollProjects}
                                className="rounded-xl bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-neutral-200 active:scale-95"
                            >
                                Projetos
                            </button>

                            <a
                                href="https://wa.me/5531985916462"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-neutral-500 active:scale-95"
                            >
                                Contato
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center md:justify-end">
                        <Image
                            width={500}
                            height={500}
                            alt="Developer Illustration"
                            src="/3d-nft-icon-developer-male-illustration.png"
                            className="animate-spin-horizontal object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}