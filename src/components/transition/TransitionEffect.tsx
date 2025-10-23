"use client";

import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-30 bg-slideGreen"
        style={{
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
        }}
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "0%", "-100%"] }}
        exit={{ x: "-100%" }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut",
          times: [0, 0.4, 1]
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-20 bg-light dark:bg-dark"
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
        }}
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "0%", "-100%"] }}
        transition={{ 
          delay: 0.1, 
          duration: 0.8, 
          ease: "easeInOut",
          times: [0, 0.4, 1]
        }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-10 bg-dark dark:bg-light"
        style={{
          clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
        }}
        initial={{ x: "100%" }}
        animate={{ x: ["100%", "0%", "-100%"] }}
        transition={{ 
          delay: 0.2, 
          duration: 0.8, 
          ease: "easeInOut",
          times: [0, 0.4, 1]
        }}
      />
    </>
  );
};

export default TransitionEffect;
