'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer
        className="w-full border-t-0 border-solid border-dark
      font-base text-lg dark:text-light dark:border-light sm:text-base
      "
      >
        <div className="py-8 flex items-center justify-center lg:flex-col lg:py-6">
          <span>&copy; {new Date().getFullYear()}</span>

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