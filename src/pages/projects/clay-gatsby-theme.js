import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";

import proj1 from "/public/images/projects/clay-theme.png";

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
        <title>
          Plataforma de Soluciones Digitales | Proyecto Destacado | DaniDev
        </title>
        <meta
          name="description"
          content="Desarrollo de una plataforma integral para gestión de servicios digitales, automatización de procesos y presencia online."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Plataforma de Soluciones Digitales"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Desarrollo de una plataforma integral para empresas y emprendedores digitales.
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Web | Automatización | E-commerce | Consultoría
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
                Plataforma desarrollada para gestionar servicios digitales, automatizar procesos y potenciar la presencia online de negocios. Incluye módulos de administración, integración de pagos y diseño adaptable.
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                Funcionalidades principales
              </h4>
              <p className="my-4">
                Gestión de usuarios, automatización de tareas, integración de e-commerce, panel de administración y soporte para crecimiento digital.
              </p>

              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
         className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base border-2 border-solid capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://clay-theme.netlify.app"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/DaniP-Dev/miWeb"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href="https://dev.to/danipdev"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <DevIcon />
                </Link>
              </div>
            </div>
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
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
                className="h-auto w-full rounded-2xl"
                src={proj1}
                alt="Clay Gatsby Theme"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
