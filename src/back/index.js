import AnimatedText from "@/back2/AnimatedText";
import { HireMe } from "@/back2/HireMe";
import Layout from "@/back2/Layout";
import SEO from "@/back2/SEO";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/back2/TransitionEffect";
import profilePic from "../../public/images/profile/Riley.png";

export default function Home() {
  return (
    <>

      <SEO
        metadata={{
          title: {
            default: "DaniDev | Desarrollo Web y Apps"
          },
          description: "Portfolio, servicios y artículos de DaniDev: desarrollo web, apps, WordPress y Shopify.",
          openGraph: {
            title: "DaniDev | Desarrollo Web y Apps",
            description: "Portfolio, servicios y artículos de DaniDev: desarrollo web, apps, WordPress y Shopify.",
            type: "website",
            url: "https://tu-dominio.com",
            images: ["https://tu-dominio.com/imagen-og.png"]
          },
          twitter: {
            card: "summary_large_image",
            title: "DaniDev | Desarrollo Web y Apps",
            description: "Portfolio, servicios y artículos de DaniDev: desarrollo web, apps, WordPress y Shopify.",
            images: ["https://tu-dominio.com/imagen-twitter.png"]
          },
          robots: {
            index: true,
            follow: true
          },
          verification: {
            google: "GOOGLE_VERIFICATION_TOKEN",
            bing: "BING_VERIFICATION_TOKEN",
            brave: "BRAVE_VERIFICATION_TOKEN"
          }
        }}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Datos estructurados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "DaniDev",
              url: "https://tu-dominio.com",
              sameAs: [
                "www.linkedin.com/in/danielpe971223",
                "https://github.com/DaniP-Dev",
                "https://x.com/Danipe_23"
              ]
            })
          }}
        />
      </SEO>

      <TransitionEffect />
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
                  href="/about/"
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
                  href="/projects/"
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
          <iframe
            className="iframe"
            title="Noongar Seasonal Calendar"
            width="280"
            height="120"
            src="https://seasonal-au.netlify.app/"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <HireMe />
      </article>
    </>
  );
}
