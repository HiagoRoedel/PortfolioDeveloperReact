import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white h-[50vh] flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center lg:justify-start lg:items-start space-y-4">
          <h1 className="font-title text-2xl">Minhas Redes Sociais</h1>
        </div>
        <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col gap-5 mt-3 space-x-4">
            <Link 
              href="https://github.com/hiagoroedel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <div className="icon flex text-xl font-title gap-3"><Github size={32} /> hiagoroedel </div>
            </Link>
            <Link 
              href="https://instagram.com/hiagoroedel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <div className="icon flex text-xl font-title gap-3"><Instagram size={32} /> @hiagoroedel</div>
            </Link>
            <Link 
              href="https://linkedin.com/in/hiagoroedel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              <div className="icon flex text-xl font-title gap-3"><Linkedin size={32} /> Hiago Roedel</div>
            </Link>
          </div>
      </div>
    </div>
  );
}
