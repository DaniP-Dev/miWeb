import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="flex w-full flex-col dark:text-light">
      <article
        className={`flex items-start text-dark dark:text-light`}
      >
        <Layout className="!pt-0 sm:!pt-8 md:!pt-16">
          <div className="flex w-full flex-col items-start justify-between sm:flex-row pt-0 sm:pt-4 pb-4 sm:pb-16">
            <div className="flex w-full sm:w-1/2 self-center max-h-fit mb-4 sm:mb-0 justify-center">
              {
                <Image
                  priority={true}
                  src="/logo.png"
                  alt="image"
                  className="h-auto w-48 sm:w-72 md:w-80"
                  height={340}
                  width={340}
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 288px, 320px"
                />
              }
            </div>
            <div className="flex w-full sm:w-1/2 flex-col self-center sm:text-left md:text-left">
              <AnimatedText
                text="¡Hola! Soy DaniDev"
                className="!text-center sm:!text-left !text-3xl sm:!text-5xl md:!text-6xl leading-tight"
              />
              <div className="flex w-full items-start sm:justify-start md:!justify-start md:!text-left md:inline-block">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-lg sm:!text-3xl md:!text-4xl text-center">
                  Desarrollo soluciones digitales a tu medida.
                </h2>
              </div>

              <p className="my-4 text-base sm:text-base md:text-base font-semibold text-justify leading-relaxed">
                Soy desarrollador web full-stack especializado en crear sitios,
                apps y tiendas online modernas, rápidas y seguras. Ayudo a
                empresas y emprendedores a potenciar su presencia digital con
                tecnología de vanguardia, automatización y diseño profesional.
              </p>
              <div className="mt-4 flex flex-col items-stretch sm:flex-row sm:items-center sm:self-start gap-3 w-full sm:w-auto">
                <Link
                  href="/curriculum/"
                  target={"_self"}
                  className={`flex items-center justify-center rounded-lg border-2 border-solid bg-dark py-3 px-6 text-base sm:text-base md:text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
             `}
                >
                  Sobre mí
                </Link>
                <Link
                  href="/portafolio/"
                  target={"_self"}
                  className={`flex items-center justify-center rounded-lg border-2 border-solid bg-light py-3 px-6 text-base sm:text-base md:text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
             `}
                >
                  Proyectos
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="fixed right-8 bottom-8 hidden lg:inline-block">
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
