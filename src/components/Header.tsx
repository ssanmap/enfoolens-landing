import React, { useState, useEffect } from "react";
import { FiMenu, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "galeria", label: "Lentes" },
  { id: "servicios", label: "Servicios" },
  { id: "about", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("inicio");

  // 1) Mide scroll para cambiar tamaño del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // activa estado según posición al montar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2) Scroll‑spy para link activo (opcional)
  useEffect(() => {
    const handleSpy = () => {
      const scrollPos = window.scrollY + 120;
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el && scrollPos >= el.offsetTop) {
          setCurrent(link.id);
        }
      }
    };
    window.addEventListener("scroll", handleSpy);
    return () => window.removeEventListener("scroll", handleSpy);
  }, []);

  return (
    <header
      className={`header-gradient fixed  left-0 right-0 w-full z-[999] transition-all duration-300 bg-white/80
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-2"
          : "bg-white/20 backdrop-blur-lg py-6"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="assets/logo_white.jpg"
            alt="ENFOOLENS"
            className={`transition-all duration-300 ${scrolled ? "h-8" : "h-16"}`}
          />
        </a>

        {/* Navegación Escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map(({ id, label }) => (
            <motion.a
              key={id}
              href={`#${id}`}
              className={`
                relative font-medium transition
                ${current === id
                  ? "text-enfoolens-purple"
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

        {/* CTA + Iconos Escritorio */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="
              px-5 py-2 rounded-full font-bold
              bg-enfoolens-purple text-white
              shadow-[0_0_10px_rgba(155,93,229,0.7)]
              hover:shadow-[0_0_20px_rgba(155,93,229,0.9)]
              transition-all duration-300
            "
          >
            Contáctanos
          </button>
          <button className="p-2 text-enfoolens-dark hover:text-enfoolens-purple transition">
            <FiUser size={20} />
          </button>
          <button className="p-2 text-enfoolens-dark hover:text-enfoolens-purple transition relative">
            <FiShoppingBag size={20} />
            <span className="
              absolute -top-1 -right-1 bg-enfoolens-primary text-white
              text-xs rounded-full w-5 h-5 flex items-center justify-center
            ">
              0
            </span>
          </button>
        </div>

        {/* Hamburguesa Móvil */}
        <button
          className="md:hidden p-2 text-enfoolens-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white/90 shadow-lg backdrop-blur-md">
          <nav className="flex flex-col space-y-2 p-4">
            {links.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
                  font-medium py-3 px-4 rounded-lg
                  hover:bg-enfoolens-light text-enfoolens-dark
                "
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-enfoolens-light/30 flex justify-center space-x-6">
            <button className="p-2 text-enfoolens-dark hover:text-enfoolens-purple transition">
              <FiUser size={20} />
            </button>
            <button className="p-2 text-enfoolens-dark hover:text-enfoolens-purple transition relative">
              <FiShoppingBag size={20} />
              <span className="
                absolute -top-1 -right-1 bg-enfoolens-primary text-white
                text-xs rounded-full w-5 h-5 flex items-center justify-center
              ">
                0
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
