import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-24">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src="/logo.png"
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col self-center lg:w-full lg:text-center">
              <AnimatedText
                text="¡Hola! Soy DaniDev"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-full items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  Desarrollo soluciones digitales a tu medida.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                Soy desarrollador web full-stack especializado en crear sitios, apps y tiendas online modernas, rápidas y seguras. Ayudo a empresas y emprendedores a potenciar su presencia digital con tecnología de vanguardia, automatización y diseño profesional.
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/curriculum/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Sobre mí
                </Link>
                <Link
                  href="/portafolio/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Proyectos
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="fixed right-8 bottom-8 inline-block md:hidden">
          <div className="bg-white/90 dark:bg-dark/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50 min-w-[280px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                Estado del Desarrollador
              </span>
            </div>
            <div className="text-lg font-bold text-green-600 dark:text-green-400 mb-1">
              ✅ Disponible para proyectos
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              Aceptando nuevos clientes • Respuesta en 24h
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500 dark:text-gray-500">
                Último proyecto: Hace 2 días
              </div>
              <div className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full">
                Activo
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}