import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light dark:bg-dark p-4 md:p-12 lg:p-16 xl:p-24 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;