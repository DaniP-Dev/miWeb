'use client';

import React from 'react';
import Link from 'next/link';
import { socialLinks } from '@/lib/constants';

const Footer = () => {
  return (
    <div>
      <footer
        className="w-full border-t-0 border-solid border-dark font-base text-lg dark:text-light dark:border-light sm:text-base"
      >
        <div className="py-8 flex flex-col items-center justify-center gap-2 lg:py-6">
          <span>&copy; {new Date().getFullYear()}</span>
          <div className="flex items-center gap-2">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <span>|</span>
            <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
            <span>|</span>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
            <span>|</span>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <span>|</span>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
          </div>
          <div className="flex items-center lg:py-2 ml-2">
            Built <span className="text-2xl px-1"></span>
            {""}
            by&nbsp;
            <Link
              href="https://travislord.xyz/"
              className="underline underline-offset-2"
            >
              DaniDev
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;