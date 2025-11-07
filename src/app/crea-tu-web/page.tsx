import type { Metadata, ResolvingMetadata } from 'next';
import CardStyleServices from '@/components/cards/cardStyle/CardStyleServices';
import Layout from '@/components/Layout';
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
  const canonicalUrl = `${baseUrl}/crea-tu-web`;

  return {
    title: 'Servicios Web | Desarrollo y Diseño Personalizado | DaniDev',
    description:
      'Servicios profesionales de diseño y desarrollo web personalizado para tu negocio. Soluciones modernas en React, Next.js, responsive design y más.',
    keywords: [
      'servicios web',
      'desarrollo web',
      'diseño web',
      'desarrollo personalizado',
      'web design',
      'frontend',
      'React',
      'Next.js',
      'responsive design',
      'web development',
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
      siteName: 'DaniDev - Servicios Web',
      title: 'Servicios Web | Desarrollo y Diseño Personalizado',
      description:
        'Explora nuestros servicios de diseño y desarrollo web personalizados para tu negocio',
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 340,
          height: 340,
          alt: 'Servicios - Desarrollo Web Personalizado',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Servicios Web | Desarrollo y Diseño Personalizado',
      description: 'Soluciones profesionales de diseño y desarrollo web para tu negocio',
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
      'url': 'https://danidev.com/crea-tu-web',
      'name': 'Servicios de Desarrollo Web',
      'description':
        'Servicios profesionales de diseño y desarrollo web personalizado para tu negocio',
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
            'name': 'Servicios',
            'item': 'https://danidev.com/crea-tu-web',
          },
        ],
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://danidev.com#business',
      'name': 'DaniDev - Servicios de Desarrollo Web',
      'description':
        'Agencia de desarrollo web especializada en soluciones modernas con React, Next.js y tecnologías contemporáneas',
      'url': 'https://danidev.com',
      'telephone': '+57 3054641743',
      'email': 'danidevcol@gmail.com',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'CO',
        'addressLocality': 'Barranquilla',
      },
      'areaServed': ['CO', 'ES', 'MX', 'AR'],
      'serviceType': 'Web Development',
    },
    {
      '@type': 'Service',
      'name': 'Servicios de Desarrollo Web',
      'description': 'Desarrollo y diseño web personalizado para empresas y negocios',
      'provider': {
        '@type': 'LocalBusiness',
        'name': 'DaniDev',
        'url': 'https://danidev.com',
      },
      'areaServed': {
        '@type': 'Country',
        'name': 'Colombia',
      },
    },
  ],
};

const PageService = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdStructuredData),
                }}
            />
            <article className="w-full">
                <Layout className="!pt-0">
                    <div className="flex flex-col w-full items-center justify-center py-10">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4 capitalize">
                                Crea tu web
                            </h1>
                            <p className="text-lg md:text-base sm:text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                                Aquí puedes explorar nuestros servicios de diseño y desarrollo web personalizados para tu negocio.
                            </p>
                        </div>
                        <CardStyleServices />
                    </div>
                </Layout>
            </article>
        </main>
    );
};

export default PageService;