"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  MoonIcon,
  SunIcon,
} from "../Icons";

import { socialLinks } from '@/lib/constants';
import useThemeSwitcher from "../Hooks/useThemeSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomMobileLink = ({ href, title, className = "", toggle }: CustomMobileLinkProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} rounded relative group text-light dark:text-dark`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[1px] bg-light absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
              ${pathname === href ? "w-full" : " w-0"}
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  const { mode, toggleTheme } = useThemeSwitcher();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay borroso de fondo */}
          <motion.div
            className="fixed inset-0 bg-black/20 dark:bg-white/10 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={toggleMenu}
          />
          
          {/* Menú móvil */}
          <motion.div
            className="w-[85vw] max-w-md max-h-[80vh] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-8 px-6 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md overflow-y-auto"
            initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
            animate={{ scale: 1, x: "-50%", y: "-50%", opacity: 1 }}
            exit={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
      {/* Navigation Links */}
      <nav className="flex items-center justify-center flex-col gap-6">
        <CustomMobileLink
          toggle={toggleMenu}
          className="mr-4 lg:m-0 lg:my-2 text-lg font-medium"
          href="/"
          title="Inicio"
        />
        <CustomMobileLink
          toggle={toggleMenu}
          className="mx-4 lg:m-0 lg:my-2 text-lg font-medium"
          href="/curriculum"
          title="Curriculum"
        />
        <CustomMobileLink
          toggle={toggleMenu}
          className="mx-4 lg:m-0 lg:my-2 text-lg font-medium"
          href="/portafolio"
          title="Portafolio"
        />
        <CustomMobileLink
          toggle={toggleMenu}
          className="ml-4 lg:m-0 lg:my-2 text-lg font-medium"
          href="/crea-tu-web"
          title="Crea tu web aquí!"
        />
      </nav>

          {/* Social Icons & Theme Toggle */}

          <nav className="flex items-center justify-center gap-2 mt-8">
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mr-3"
              href={socialLinks.instagram}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ver mi perfil de Instagram"
            >
              <InstagramIcon />
            </motion.a>

            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mx-3"
              href={socialLinks.tiktok}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ver mi perfil de TikTok"
            >
              <TikTokIcon />
            </motion.a>

            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mx-3"
              href={socialLinks.x}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ver mi perfil de X"
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mx-3"
              href={socialLinks.linkedin}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ver mi perfil de LinkedIn"
            >
              <LinkedInIcon />
            </motion.a>

            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 mx-3 rounded-full p-1 bg-light dark:bg-dark flex items-center justify-center"
              href={socialLinks.github}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ver mi perfil de GitHub"
            >
              <GithubIcon className="text-dark dark:text-light" />
            </motion.a>

            <button
              onClick={toggleTheme}
              className={`w-8 h-8 ease ml-6 flex items-center justify-center rounded-full p-1.5 border-2 border-opacity-50 transition-all
                ${mode === "light" ? "bg-dark text-light border-light" : "bg-light text-dark border-dark"}
                `}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <SunIcon className={"fill-light"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;