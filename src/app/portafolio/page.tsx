import type { Metadata, ResolvingMetadata } from 'next';
import CardsPortafolio from '@/components/cards/CardsPortafolio';
import React from 'react';

type Props = {
  params: Promise<{ slug?: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  _props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';
  const canonicalUrl = `${baseUrl}/portafolio`;

  return {
    title: 'Portafolio de Proyectos | Desarrollador Full Stack | DaniDev',
    description:
      'Explora mi portafolio profesional con proyectos destacados en desarrollo web, aplicaciones, y soluciones tecnológicas. Trabajos realizados en React, Next.js, TypeScript y más.',
    keywords: [
      'portafolio',
      'desarrollador',
      'full stack',
      'proyectos',
      'web development',
      'React',
      'Next.js',
      'TypeScript',
      'freelancer',
      'desarrollo web',
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
      siteName: 'DaniDev - Portafolio',
      title: 'Portafolio de Proyectos | Desarrollador Full Stack',
      description:
        'Descubre mis mejores proyectos en desarrollo web y soluciones tecnológicas innovadoras.',
      images: [
        {
          url: `${baseUrl}/images/og-portafolio.jpg`,
          width: 1200,
          height: 630,
          alt: 'Portafolio - Proyectos de desarrollo web',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Portafolio de Proyectos | Desarrollador Full Stack',
      description: 'Explora mis trabajos y proyectos profesionales en desarrollo web',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// JSON-LD Structured Data
const jsonLdStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Portafolio de Proyectos',
  'description':
    'Portafolio profesional con proyectos destacados en desarrollo web y soluciones tecnológicas',
  'url': 'https://danidev.com/portafolio',
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
        'name': 'Portafolio',
        'item': 'https://danidev.com/portafolio',
      },
    ],
  },
};

const PagePortafolio = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdStructuredData),
        }}
      />
      <div>
        <h1>Portafolio</h1>
        <p>Aquí puedes ver algunos de mis trabajos anteriores.</p>
        <p>Aquí puedes ver algunos de mis trabajos anteriores.</p>
        <p>Aquí puedes ver algunos de mis trabajos anteriores.</p>
        <CardsPortafolio />
      </div>
    </>
  );
};

export default PagePortafolio;