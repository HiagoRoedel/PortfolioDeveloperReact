'use client'
import { BannerHome } from "@/components/banner";
import SendEmail from "@/components/contact-email";
import Footer from "@/components/footer";
import Projects from "@/components/projetos";
import SobreMim from "@/components/sobre-mim";

export default function Home() {
  return (
    <>
      <BannerHome />
      <SobreMim />
      <Projects />
      <SendEmail />
      <Footer />
    </>
  );
}
