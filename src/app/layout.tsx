import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageWrapper from "@/components/transition/PageWrapper";
import ThemeScript from "@/components/Hooks/ThemeScript";
import { ContactButtom } from "@/components/ContactButtom";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <ThemeScript />
      </head>
      <body className="bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300 min-h-screen ">
        <div className="min-h-screen">
          <div className="pb-6">
            <Navbar />
          </div>
          <PageWrapper>
            <main className="flex-1">{children}</main>
          </PageWrapper>
          <ContactButtom />
        </div>
        <Footer />
      </body>
    </html>
  );
}
