import React from 'react';
import PageWrapper from '@/components/transition/PageWrapper';

export const metadata = {
  title: 'Crea tu web | Servicios web profesionales',
  description: 'Descubre nuestros servicios web: desarrollo, mantenimiento, optimización y más.',
  keywords: 'servicios web, desarrollo web, diseño, mantenimiento web',
};

export default function CreaTuWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <main className="w-full">
        {children}
      </main>
    </PageWrapper>
  );
}
