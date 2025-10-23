'use client';

import React from 'react';

const ThemeScript = () => {
  const scriptContent = `
    (function() {
      function getInitialTheme() {
        // Si hay una preferencia guardada (usuario hizo una elección), usarla
        const persistedTheme = window.localStorage.getItem('theme');
        if (persistedTheme) {
          return persistedTheme;
        }
        
        // Si no hay preferencia guardada, usar el tema del sistema
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasSystemTheme = typeof mql.matches === 'boolean';
        
        if (hasSystemTheme) {
          return mql.matches ? 'dark' : 'light';
        }
        
        return 'light';
      }
      
      const theme = getInitialTheme();
      const root = document.documentElement;
      
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: scriptContent,
      }}
    />
  );
};

export default ThemeScript;