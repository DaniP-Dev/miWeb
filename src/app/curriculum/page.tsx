import type { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import { DownloadButton } from '../../components/Download-button';
import { LinkedInIcon, GithubIcon } from '../../components/Icons';

export async function generateMetadata(
  _props: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';
  const canonicalUrl = `${baseUrl}/curriculum`;

  return {
    title: 'Curriculum | Desarrollador Full Stack | Daniel Ricardo Perez Guzman | DaniDev',
    description:
      'Curriculum profesional de Daniel Ricardo Perez Guzman - Desarrollador Full Stack con experiencia en React, Next.js, TypeScript, PHP, Laravel y más. Descarga mi CV en PDF.',
    keywords: [
      'curriculum',
      'CV',
      'desarrollador full stack',
      'experiencia',
      'habilidades técnicas',
      'React',
      'Next.js',
      'PHP',
      'Laravel',
      'educación',
    ],
    authors: [{ name: 'Daniel Ricardo Perez Guzman', url: baseUrl }],
    creator: 'Daniel Ricardo Perez Guzman',
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: canonicalUrl,
      siteName: 'DaniDev - Curriculum',
      title: 'Curriculum | Desarrollador Full Stack | Daniel Ricardo Perez Guzman',
      description:
        'Conoce mi experiencia, habilidades y educación como Desarrollador Full Stack. Descarga mi CV profesional.',
      images: [
        {
          url: `${baseUrl}/images/og-curriculum.jpg`,
          width: 1200,
          height: 630,
          alt: 'Curriculum - Daniel Ricardo Perez Guzman Desarrollador Full Stack',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Curriculum | Desarrollador Full Stack | Daniel Ricardo Perez Guzman',
      description: 'Mi experiencia profesional y habilidades técnicas como desarrollador',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// JSON-LD Structured Data
const jsonLdStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      'url': 'https://danidev.com/curriculum',
      'name': 'Curriculum - Desarrollador Full Stack',
      'description':
        'Curriculum profesional de Daniel Ricardo Perez Guzman con experiencia en desarrollo full stack',
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Inicio',
            'item': 'https://danidev.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Curriculum',
            'item': 'https://danidev.com/curriculum',
          },
        ],
      },
    },
    {
      '@type': 'Person',
      'name': 'Daniel Ricardo Perez Guzman',
      'title': 'Desarrollador Full Stack',
      'url': 'https://danidev.com',
      'email': 'danidevcol@gmail.com',
      'telephone': '+57 3054641743',
      'jobTitle': 'Desarrollador Full Stack',
      'description': 'Desarrollador Full Stack especializado en React, Next.js, PHP y Laravel',
      'knowsAbout': [
        'React.js',
        'Next.js',
        'TypeScript',
        'PHP',
        'Laravel',
        'SQL',
        'NoSQL',
        'Tailwind CSS',
        'Bootstrap',
        'WordPress',
      ],
      'sameAs': [
        'https://www.linkedin.com/in/danidev',
        'https://github.com/DaniP-Dev',
      ],
      'education': {
        '@type': 'EducationalOccupationalCredential',
        'name': 'Mantenimiento de sistemas informáticos',
        'credentialCategory': 'degree',
      },
      'workLocation': {
        '@type': 'Place',
        'name': 'Barranquilla, Colombia',
      },
    },
  ],
};

const PageCurriculum = () => {

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdStructuredData),
                }}
            />
            <div className="min-h-screen bg-light dark:bg-dark py-12 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                {/* Botón de Descarga */}
                <div className="mb-6 flex justify-end">
                    <DownloadButton />
                </div>

                {/* Contenedor del CV */}
                <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                    
                    {/* Encabezado */}
                    <div className="mb-6 border-b-2 border-gray-300 pb-4 text-center">
                        <p className="text-xs font-semibold text-gray-600 tracking-widest">DESARROLLADOR WEB / DESARROLLADOR APP</p>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mt-1">Daniel Ricardo Perez Guzman</h1>
                        <p className="text-xs sm:text-sm text-gray-700 mt-1">DESARROLLADOR</p>
                        
                        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
                                <div className="mt-4 flex flex-row sm:flex-col justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm w-full">
                                    <div className="flex items-center gap-1 w-full max-w-[220px] break-all justify-center">
                                        <span>✉️</span>
                                        <a href="mailto:danidevcol@gmail.com" className="text-gray-700 hover:text-blue-600 break-all">
                                            danidevcol@gmail.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-1 w-full max-w-[160px] break-all justify-center">
                                        <span>📱</span>
                                        <a href="tel:+573054641743" className="text-blue-600 hover:underline break-all">
                                            +57 3054641743
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4 justify-center mt-1 sm:mt-0">
                                        <a href="https://www.linkedin.com/in/danidev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-600 hover:text-blue-800">
                                            <LinkedInIcon className="w-5 h-5" />
                                        </a>
                                        <a href="https://github.com/DaniP-Dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-blue-600 hover:text-blue-800">
                                            <GithubIcon className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>

                    {/* Sobre Mí */}
                    <section className="mb-8">
                        <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide">
                            Sobre Mí
                        </h3>
                        <p className="text-justify leading-relaxed text-sm text-gray-700">
                            Mi objetivo es colaborar en el desarrollo de aplicaciones web funcionales y optimizadas, aplicando buenas prácticas de programación. 
                            También puedo crear estructuras de código claras, documentación técnica y procedimientos eficientes para mejorar el flujo de trabajo. 
                            Me emociona sumar nuevos conocimientos y experiencia a mi vida profesional y a mis compañeros de trabajo.
                        </p>
                    </section>

                    {/* Grid de 2 columnas */}
                    <div className="cv-grid">
                        {/* COLUMNA IZQUIERDA */}
                        <div className="cv-left-col">
                            {/* Formación */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Formación
                                </h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>• Desarrollo web con Next.js</p>
                                    <p>• Terminal y Línea de Comandos</p>
                                    <p>• Fundamentos Python</p>
                                    <p>• Expresiones Regulares</p>
                                    <p>• Manejo de Datos, Estructuras y Funciones</p>
                                </div>
                            </section>

                            {/* Idiomas */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Idiomas
                                </h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>• Inglés Nivel B1</p>
                                    <p>• Español Nativo</p>
                                </div>
                            </section>

                            {/* Skills */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Skills
                                </h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>• React.js</p>
                                    <p>• SQL - NoSQL</p>
                                    <p>• Tailwind CSS</p>
                                    <p>• Bootstrap</p>
                                    <p>• PHP</p>
                                    <p>• WordPress</p>
                                    <p>• Laravel</p>
                                    <p>• Shopify</p>
                                    <p>• Servidores Cpanel y Vercel</p>
                                    <p>• ISO 9001</p>
                                    <p>• CodeIgniter</p>
                                </div>
                            </section>

                            {/* Hobbies */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Hobbies
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Jugar Baloncesto y conocer personas nuevas
                                </p>
                            </section>
                        </div>

                        {/* COLUMNA DERECHA */}
                        <div className="cv-right-col">
                            {/* Educación */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Educación
                                </h3>
                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-sm">Universidad de Barranquilla</h4>
                                    <p className="text-blue-600 font-medium text-sm">Mantenimiento de sistemas informáticos</p>
                                    <p className="text-gray-600 text-sm">2023</p>
                                </div>
                            </section>

                            {/* Experiencia */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Experiencia
                                </h3>
                                
                                <div className="mb-6 border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-sm">FreeLancer</h4>
                                    <p className="text-blue-600 font-medium text-sm">Independiente, 2023 a 2025</p>
                                    <ul className="mt-2 ml-2 space-y-1 text-xs text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Desarrollo y mantenimiento de sitios web</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Despliegue Proyectos en cPanel y Vercel</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Integración de dominios</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>SEO básico</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Optimización de rendimiento y estructura del código</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Documentación técnica y soporte a clientes</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-sm">FullStack</h4>
                                    <p className="text-blue-600 font-medium text-sm">Oasis, 2022 a 2024</p>
                                    <ul className="mt-2 ml-2 space-y-1 text-xs text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Maquetación de interfaces</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Componentes interactivos y animaciones</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Diseños para distintos dispositivos</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Colaboración con el equipo backend</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Despliegue</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Nota ATS */}
                    <div className="mt-12 text-center text-xs text-gray-500">
                        Este currículum está optimizado para sistemas ATS (Applicant Tracking Systems)
                    </div>
                </div>
                </div>
            </div>
            </>
        );
    };

export default PageCurriculum;