import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiInstagram, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  { id: "", label: "Inicio" },
  { id: "galeria", label: "Lentes" },
  { id: "servicios", label: "Servicios" },
  { id: "about", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSpy = () => {
      const pos = window.scrollY + 120;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && pos >= el.offsetTop) {
          setCurrent(links[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleSpy);
    return () => window.removeEventListener("scroll", handleSpy);
  }, []);

  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-300 bg-white/80
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-2"
          : "bg-white/20 backdrop-blur-lg py-6"
        }
      `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="assets/enff.png"
            alt="ENFOOLENS"
            className={`transition-all duration-300 ${
              scrolled ? "h-8" : "h-16"
            }`}
          />
        </a>

        {/* Nav Escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map(({ id, label }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              className={`
                relative font-medium transition
                ${current === id
                  ? "text-enfoolens-purple before:w-full"
                  : "text-enfoolens-dark hover:text-enfoolens-purple"
                }
                before:absolute before:-bottom-1 before:left-0
                before:h-0.5 before:w-0 before:bg-enfoolens-purple
                before:transition-all before:duration-300
                hover:before:w-full
              `}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* CTA + Iconos Escritorio - Versión mejorada */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Botón "Ubícanos" con efecto 3D y sombra */}
          <motion.a
            href="#ubicacion"
            className="
              px-5 py-2.5 rounded-lg font-bold relative
              bg-enfoolens-purple text-white
              shadow-lg hover:shadow-xl
              transition-all duration-300
              overflow-hidden
              group
            "
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Ubícanos</span>
            <span className="
              absolute inset-0 bg-gradient-to-r 
              from-enfoolens-purple/80 to-enfoolens-cyan/80
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            "></span>
          </motion.a>

          {/* Icono Instagram con efecto hover y enlace externo */}
          <motion.a
            href="https://www.instagram.com/enfoolens.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2.5 rounded-lg
              bg-white text-enfoolens-purple
              border border-enfoolens-purple/20
              shadow-md hover:shadow-lg
              transition-all duration-300
              group
            "
            aria-label="Síguenos en Instagram"
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiInstagram 
              size={20} 
              className="
                group-hover:text-enfoolens-cyan
                transition-colors duration-300
              " 
            />
          </motion.a>
        </div>

        {/* Hamburguesa Mobile */}
        <button
          className="md:hidden p-2 text-enfoolens-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú Mobile mejorado */}
      {isOpen && (
        <div className="md:hidden bg-white/95 shadow-xl backdrop-blur-md">
          <nav className="flex flex-col space-y-1 p-4">
            {links.map(({ id, label }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                className="
                  font-medium py-3 px-4 rounded-lg
                  hover:bg-enfoolens-light/50 text-enfoolens-dark
                  transition-colors
                "
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {label}
              </motion.a>
            ))}
          </nav>
          <div className="p-4 border-t border-enfoolens-light/30 flex justify-center space-x-6">
            {/* Mapa con animación */}
            <motion.a
              href="#ubicacion"
              className="p-3 rounded-lg bg-enfoolens-purple/10 hover:bg-enfoolens-purple/20 transition"
              aria-label="Ubícanos"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMapPin size={20} className="text-enfoolens-purple" />
            </motion.a>
            
            {/* Instagram con enlace externo */}
            <motion.a
              href="https://www.instagram.com/enfoolens.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-enfoolens-cyan/10 hover:bg-enfoolens-cyan/20 transition"
              aria-label="Instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiInstagram size={20} className="text-enfoolens-cyan" />
            </motion.a>
          </div>
        </div>
      )}
    </header>
  );
};