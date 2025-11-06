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
      className={`${className} rounded relative group lg:text-light lg:dark:text-dark`}
    >
      {title}
      <span
        className={`
              inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${
                pathname === href ? "w-full" : " w-0"
              } lg:bg-light lg:dark:bg-dark
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
      <header className="w-full flex items-center justify-between px-32 pt-10 pb-8 font-medium dark:text-light lg:px-16 relative z-50 md:px-12 sm:px-8">
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
    <header className="w-full flex items-center justify-between px-32 pt-10 pb-8 font-medium dark:text-light lg:px-16 relative z-50 md:px-12 sm:px-8">
      {/* Botón hamburguesa fijo para móviles */}
      <button
        type="button"
        className="flex-col items-center justify-center flex lg:hidden lg:fixed lg:top-8 lg:left-4 lg:z-[60] lg:bg-light/80 lg:dark:bg-dark/80 lg:backdrop-blur-sm lg:rounded-lg lg:p-3 lg:shadow-lg"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="hidden lg:flex w-full justify-between items-center">
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
