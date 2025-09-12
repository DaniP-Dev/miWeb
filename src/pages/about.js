import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Riley.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre DaniDev | Portfolio y Experiencia</title>
        <meta name="description" content="Conoce a DaniDev: experiencia, habilidades, proyectos y servicios en desarrollo web, apps, servidores, WordPress, Shopify, automatización y más." />
        <meta name="keywords" content="DaniDev, desarrollador web, portfolio, experiencia, Next.js, Laravel, Flutter, WordPress, Shopify, PHP, CodeIgniter, SQL, Firebase, JavaScript, TSX, HTML, CSS, Tailwind, Bootstrap, automatización, servidores, ecommerce, habilidades, proyectos" />
        <meta name="author" content="DaniDev" />
        <link rel="canonical" href="https://tu-dominio.com/about" />
        <meta property="og:title" content="Sobre DaniDev | Portfolio y Experiencia" />
        <meta property="og:description" content="Conoce a DaniDev: experiencia, habilidades, proyectos y servicios en desarrollo web, apps, servidores, WordPress, Shopify, automatización y más." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://tu-dominio.com/about" />
        <meta property="og:image" content="https://tu-dominio.com/images/profile/Riley.png" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre DaniDev | Portfolio y Experiencia" />
        <meta name="twitter:description" content="Conoce a DaniDev: experiencia, habilidades, proyectos y servicios en desarrollo web, apps, servidores, WordPress, Shopify, automatización y más." />
        <meta name="twitter:image" content="https://tu-dominio.com/images/profile/Riley.png" />
        <meta name="twitter:site" content="@tu_usuario" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="Content-Language" content="es" />
        <link rel="alternate" href="https://tu-dominio.com/about" hrefLang="es" />
        {/* SEO Skills: lista oculta para buscadores */}
        <ul className="sr-only">
          <li>Next.js</li>
          <li>Laravel</li>
          <li>Flutter</li>
          <li>WordPress</li>
          <li>Shopify</li>
          <li>PHP</li>
          <li>CodeIgniter</li>
          <li>SQL</li>
          <li>phpMyAdmin</li>
          <li>Firebase</li>
          <li>JavaScript</li>
          <li>TSX</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
          <li>Librerías CSS</li>
          <li>Servidores</li>
          <li>Dart</li>
        </ul>
        {/* SEO Skills: JSON-LD structured data ampliado */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'DaniDev',
            alternateName: 'Daniel Developer',
            url: 'https://tu-dominio.com/about',
            image: 'https://tu-dominio.com/images/profile/Riley.png',
            sameAs: [
              'https://github.com/DaniP-Dev',
              'https://www.linkedin.com/in/danip-dev/'
            ],
            jobTitle: 'Desarrollador Web Full Stack',
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance'
            },
            knowsAbout: [
              'Next.js', 'Laravel', 'Flutter', 'WordPress', 'Shopify', 'PHP', 'CodeIgniter', 'SQL', 'phpMyAdmin', 'Firebase',
              'JavaScript', 'TSX', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Librerías CSS', 'Servidores', 'Dart', 'Automatización', 'eCommerce'
            ],
            description: 'Desarrollador web y de aplicaciones con experiencia en servidores, automatización, WordPress, Shopify y tecnologías modernas.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ciudad',
              addressCountry: 'País'
            },
            email: 'contacto@tu-dominio.com',
            alumniOf: 'Universidad o formación',
            gender: 'male',
            nationality: 'País'
          })
        }} />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Transformo ideas en soluciones digitales que impactan"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                SOBRE MÍ
              </h2>
              <p className="font-medium ">
                Soy Daniel, Desarrollador web full-stack con un enfoque fuerte en inteligencia artificial, especializado en tecnologías modernas como Next.js, React y Laravel para construir aplicaciones escalables, seguras y de alto rendimiento. Poseo amplia experiencia tanto en frontend avanzado con React, Tailwind CSS y Bootstrap, como en backend con Laravel, FastAPI, Python, y bases de datos SQL, NoSQL y Firebase.
              </p>
              <p className="my-4 font-medium">
                He liderado proyectos completos que integran autenticación, APIs GraphQL, bases de datos en tiempo real y funciones en la nube, brindando soluciones eficientes y robustas. Mi versatilidad me permite abordar desafíos complejos con lógica algorítmica y desarrollar código optimizado tanto para interfaces ricas como para servicios backend.
                Complemento mis capacidades técnicas con habilidades en DevOps, manejo avanzado de Git y uso básico de Docker, asegurando así la estabilidad y calidad en entornos de desarrollo y producción.
              </p>
              <p className="my-4 font-medium">
                Actualmente trabajo como freelancer, aportando soluciones digitales innovadoras y escalables que potencian a startups y empresas tecnológicas. Mi objetivo es seguir creciendo profesionalmente, fusionando inteligencia artificial con desarrollo web para crear productos disruptivos que generen valor real al usuario y al negocio.
              </p>
            </div>
            <div
              className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl border-2 border-solid border-dark"
                priority={true}
                src={profile}
                alt="DaniDev"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={1461} />+
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Días creando soluciones
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={500} />
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Funcionalidades
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={499} />
                </span>
                <h3
                  className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Errores resueltos
                </h3>
              </div>
            </div>
            <HireMe2 />
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
