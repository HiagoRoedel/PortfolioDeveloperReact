'use client'
import { cn } from "@/lib/utils";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function BannerHome() {

    const text = "Developer Portfolio";
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = isDeleting ? 50 : 100;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayedText.length < text.length) {
            timeout = setTimeout(() => {
                setDisplayedText(text.substring(0, displayedText.length + 1));
            }, speed);
        } else if (isDeleting && displayedText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayedText(text.substring(0, displayedText.length - 1));
            }, speed);
        } else {
            timeout = setTimeout(() => {
                setIsDeleting(!isDeleting);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting]);

    return (
        <div className="relative flex h-[100vh] w-full items-center justify-start bg-white dark:bg-black">
            {/* Grid de fundo */}
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />
            {/* Gradiente radial para efeito de desfoque nas bordas */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="container mx-auto flex flex-col justify-center items-center ">

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 mt-8 lg:mt-0">
                    <div className="text-center items-center justify-center flex flex-col lg:justify-start lg:items-start ">
                        <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 text-6xl md:text-8xl lg:text-9xl font-bold text-transparent">
                            Hiago<br />Roedel
                        </h1>
                        <span className="text-white text-4xl md:text-5xl relative z-20">
                            {displayedText}
                            <span className="animate-blink">|</span>
                        </span>
                    </div>
                    <div className="flex justify-end">
                        <Image
                            width={500}
                            height={500}
                            alt="Imagem girando"
                            src="/3d-nft-icon-developer-male-illustration.png"
                            className="animate-spin-horizontal"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
