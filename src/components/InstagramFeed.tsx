// src/components/InstagramBanner.tsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/assets/res.json";
import { motion, useScroll, useTransform } from "framer-motion";

export const InstagramBanner: React.FC = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <motion.section
      style={{ backgroundPositionY: bgY }}
      className="
        relative h-[70vh] 
        bg-[url('/assets/lentes.avif')] bg-center bg-cover bg-fixed
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Lottie MOBILE: reposicionado */}
      <div className="absolute top-1/3 left-1/2 z-10 transform -translate-x-1/2 md:hidden pointer-events-none mt-10">
        <div className="w-40">
          <Lottie animationData={animationData} loop autoplay />
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-20 container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-4 mt-10">
        {/* Texto + CTA */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 w-full md:w-auto mt-10">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-tight">
            Síguenos en Instagram
          </h2>
          <a
            href="https://www.instagram.com/enfoolens.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-8 py-4 rounded-2xl font-bold
              text-lg sm:text-xl md:text-2xl
              bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500
              text-white shadow-[0_10px_20px_rgba(0,0,0,0.4)]
              hover:from-purple-800 hover:to-purple-400
              transition-transform duration-300
              hover:scale-110
              animate-pulse
              mb-12
            "
          >
            @enfoolens.cl
          </a>
        </div>

        {/* Lottie DESKTOP: lado a lado */}
        <div className="hidden md:block w-72 md:w-96">
          <Lottie animationData={animationData} loop autoplay />
        </div>
      </div>
    </motion.section>
  );
};
