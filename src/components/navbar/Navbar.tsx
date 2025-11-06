"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
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
import { motion } from "framer-motion";
import useThemeSwitcher from "../Hooks/useThemeSwitcher";
import MobileMenu from "./MobileMenu";
import ButtonWpp from "@/components/ButtonWpp";

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} rounded relative group text-dark lg:text-dark dark:text-light dark:lg:text-light`}
    >
      {title}
      <span
        className={`
              inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                pathname === href ? "w-full" : " w-0"
              }
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const { mode, toggleTheme, mounted } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (!mounted) {
    return (
      <header className="w-full flex items-center justify-between px-32 pt-10 pb-8 font-medium dark:text-light md:px-16 relative z-50 lg:px-12 sm:px-8">
        <div className="w-6 h-6 bg-dark dark:bg-light opacity-50 rounded"></div>
        <div className="w-16 h-16 bg-dark dark:bg-light opacity-50 rounded-full"></div>
        <div className="flex space-x-3">
          <div className="w-6 h-6 bg-dark dark:bg-light opacity-30 rounded"></div>
          <div className="w-6 h-6 bg-dark dark:bg-light opacity-30 rounded"></div>
          <div className="w-6 h-6 bg-dark dark:bg-light opacity-50 rounded"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full flex items-center justify-between px-32 pt-10 pb-8 font-medium dark:text-light md:px-16 relative z-50 lg:px-12 sm:px-8">
      {/* Botón hamburguesa fijo para móviles */}
      <button
        type="button"
        className="flex-col items-center justify-center flex md:hidden fixed left-4 top-4 z-[60] bg-light/80 dark:bg-dark/80 backdrop-blur-sm rounded-lg p-3"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark dark:bg-light block h-1 w-8 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-1 w-8 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-1`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-1 w-8 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
          }`}
        ></span>
      </button>

      <div className="hidden md:flex w-full justify-between items-center">
        <nav className="flex items-center justify-center">
          <CustomLink className="mr-4" href="/" title="Inicio" />
          <CustomLink className="mx-4" href="/curriculum" title="Curriculum" />
          <CustomLink className="mx-4" href="/portafolio" title="Portafolio" />
          <CustomLink className="ml-4" href="/crea-tu-web" title="Crea tu web aquí!" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap lg:mt-2">

          <motion.a
            target={"_blank"}
            className="w-7 mr-3"
            href={socialLinks.instagram}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Ver mi perfil de Instagram"
          >
            <InstagramIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href={socialLinks.tiktok}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Ver mi perfil de TikTok"
          >
            <TikTokIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href={socialLinks.x}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Ver mi perfil de X"
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href={socialLinks.linkedin}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Ver mi perfil de LinkedIn"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            target={"_blank"}
            className="w-7 mx-3"
            href={socialLinks.github}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Ver mi perfil de GitHub"
          >
            <GithubIcon />
          </motion.a>

          <button
            onClick={toggleTheme}
            className={`w-7 h-7 ease ml-6 flex items-center justify-center rounded-full p-1 border-2 border-opacity-30
            ${mode === "light" ? "bg-dark text-light border-dark" : "bg-light text-dark border-light"}
            `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} toggleMenu={handleClick} />

  <div className="absolute left-[50%] top-2 translate-x-[-50%] flex items-center justify-center">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
