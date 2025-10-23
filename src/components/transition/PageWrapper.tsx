'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import TransitionEffect from './TransitionEffect';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [shouldShowTransition, setShouldShowTransition] = useState(false);
  const [shouldShowContent, setShouldShowContent] = useState(true);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    // En la primera carga, marcar como inicial
    if (isInitialLoad) {
      setIsInitialLoad(false);
      setCurrentChildren(children);
      return;
    }

    // Si no es la carga inicial, iniciar transición
    setShouldShowTransition(true);
    setShouldShowContent(false);
    
    // Cambiar el contenido cuando la cortina esté cubriendo (40% de 800ms = 320ms)
    const contentChangeTimer = setTimeout(() => {
      setCurrentChildren(children);
      setShouldShowContent(true);  // ← Reaparece a los 320ms
    }, 320);
    
    // Ocultar la transición después de que termine completamente
    const transitionEndTimer = setTimeout(() => {
      setShouldShowTransition(false);
    }, 1000);

    return () => {
      clearTimeout(contentChangeTimer);
      clearTimeout(transitionEndTimer);
    };
  }, [pathname, isInitialLoad, children]);

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>
        {shouldShowTransition && <TransitionEffect />}
        <div style={{ opacity: shouldShowContent ? 1 : 0 }}>
          {currentChildren}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default PageWrapper;