"use client";

import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // Función para obtener el tema inicial
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "light";

    // Si hay una preferencia guardada (usuario hizo una elección), usarla
    const persistedTheme = window.localStorage.getItem("theme");
    if (persistedTheme) {
      return persistedTheme;
    }

    // Si no hay preferencia guardada, usar el tema del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    return mediaQuery.matches ? "dark" : "light";
  };

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setMode(initialTheme);
    setMounted(true);

    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Solo seguir las preferencias del sistema si el usuario no ha hecho una elección manual
      const savedTheme = window.localStorage.getItem("theme");
      if (!savedTheme) {
        const newTheme = e.matches ? "dark" : "light";
        setMode(newTheme);
        updateTheme(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const updateTheme = (newMode: string) => {
    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (mounted && mode) {
      updateTheme(mode);
    }
  }, [mode, mounted]);

  // Función para alternar el tema manualmente
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    // Guardar la elección del usuario para futuras visitas
    window.localStorage.setItem("theme", newMode);
    setMode(newMode);
  };

  return {
    mode,
    setMode,
    toggleTheme,
    mounted,
  } as const;
};

export default useThemeSwitcher;
