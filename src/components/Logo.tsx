import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MotionLink = motion.create(Link);

const Logo = () => {
  const pathname = usePathname();
  const [isHeartbeating, setIsHeartbeating] = useState(false);

  useEffect(() => {
    // Activar el efecto de respiración cuando cambie la página
    setIsHeartbeating(true);
    
    // Detener el efecto después de 1 segundo (mitad de la transición)
    const timer = setTimeout(() => {
      setIsHeartbeating(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold dark:border-2 dark:border-solid dark:border-light"
        animate={isHeartbeating ? {
          scale: [1, 1.15, 1, 1.12, 1],
        } : {}}
        transition={isHeartbeating ? {
          duration: 1.2,
          repeat: 0,
          ease: "easeInOut"
        } : {}}
        whileHover={{
          backgroundColor: [
            
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        DP
      </MotionLink>
    </div>
  );
};

export default Logo;