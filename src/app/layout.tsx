import type { Metadata, Viewport } from 'next';
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageWrapper from "@/components/transition/PageWrapper";
import ThemeScript from "@/components/Hooks/ThemeScript";
import { ContactButtom } from "@/components/ContactButtom";
import { ReactNode } from "react";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://danidev.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'DaniDev | Desarrollador Full Stack',
    template: '%s | DaniDev',
  },
  description:
    'Desarrollador Full Stack especializado en React, Next.js y tecnologías modernas. Portafolio, servicios y soluciones de desarrollo web profesional.',
  keywords: [
    'desarrollador',
    'full stack',
    'React',
    'Next.js',
    'TypeScript',
    'web development',
    'freelancer',
    'desarrollo web',
    'programador',
    'desarrollo personalizado',
  ],
  authors: [{ name: 'Daniel Ricardo Perez Guzman', url: baseUrl }],
  creator: 'Daniel Ricardo Perez Guzman',
  publisher: 'DaniDev',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: baseUrl,
    siteName: 'DaniDev',
    title: 'Desarrollador Full Stack | DaniDev',
    description:
      'Servicios de desarrollo web profesional - React, Next.js, TypeScript y más.',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'DaniDev - Desarrollador Full Stack',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@danidev',
    creator: '@danidev',
    title: 'Desarrollador Full Stack | DaniDev',
    description:
      'Desarrollo web profesional con React, Next.js y tecnologías modernas',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'googleecd6e6ebd8786e38.html',
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      es: `${baseUrl}/es`,
      en: `${baseUrl}/en`,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

// JSON-LD Structured Data para Organization
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Daniel Ricardo Perez Guzman',
  'url': baseUrl,
  'image': `${baseUrl}/images/profile/profile.jpg`,
  'description': 'Desarrollador Full Stack especializado en React, Next.js y tecnologías modernas',
  'jobTitle': 'Desarrollador Full Stack',
  'email': 'danidevcol@gmail.com',
  'telephone': '+57 3054641743',
  'sameAs': [
    'https://www.linkedin.com/in/danidev',
    'https://github.com/DaniP-Dev',
    'https://twitter.com/danidev',
  ],
  'knowsAbout': [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Full Stack Development',
    'Responsive Design',
    'PHP',
    'Laravel',
  ],
  'location': {
    '@type': 'City',
    'name': 'Barranquilla, Colombia',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
        
        {/* Preconnect para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch para servicios externos */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href={baseUrl} />
        
        
        {/* Meta tags adicionales para SEO */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className="bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300 min-h-screen ">
        <div className="min-h-screen">
          <div className="pb-6">
            <Navbar />
          </div>
          <PageWrapper>
            <main className="flex-1">{children}</main>
          </PageWrapper>
          <ContactButtom />
        </div>
        <Footer />
      </body>
    </html>
  );
}
