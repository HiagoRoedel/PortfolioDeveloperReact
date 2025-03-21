import Image from "next/image";



export default function SobreMim() {
  return (
    <>
      <div className="bg-black h-[100vh] flex items-center justify-center">
        <div className="container">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="grid-1 flex justify-center">
              <Image
                width={230}
                height={230}
                alt="Imagem girando"
                src="/3d-rendering-thumb-up-hand.png"
                className="animate-spin-horizontal hidden lg:block"
              />
            </div>
            <div className="grid-2 text-white items-center justify-center">
              <h1 className="font-title text-center lg:text-start text-3xl uppercase">Um pouco sobre mim</h1>
              <p className="font-poppins text-normal lg:text-xl mt-3 text-center lg:text-start">
                Desde pequeno sempre me interessei por tecnologia e computadores. Esse interesse me levou a fazer um curso técnico que envolvia programação, onde descobri minha paixão pela área. A partir daí, comecei minha jornada profissional como trainee, ao mesmo tempo em que iniciava minha graduação na área. Atualmente, atuo como desenvolvedor júnior, adquirindo cada vez mais experiência e aprimorando minhas habilidades. Além de programar, gosto de passar meu tempo livre jogando nos fins de semana e explorando minha curiosidade por mecânica automotiva.
              </p>
              <div className="flex items-center justify-center mt-3">
              <Image
                width={230}
                height={230}
                alt="Imagem girando"
                src="/3d-rendering-thumb-up-hand.png"
                className="animate-spin-horizontal block lg:hidden"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
