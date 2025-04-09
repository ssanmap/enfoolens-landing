import { useState, useEffect } from "react";
import { FiMenu, FiShoppingBag, FiUser, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white  py-2" : "bg-white backdrop-blur-sm py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Link a Inicio */}
        <a href="#" className="flex items-center">
          <img 
            src="assets/logo_white.jpg"  // Asegúrate de tener este archivo en public/
            alt="ENFOOLENS" 
            className={`h-10 transition-all ${scrolled ? "h-8" : "h-10"}`}
          />
        </a>

        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#inicio" 
            className="font-medium text-enfoolens-dark hover:text-enfoolens-primary transition"
          >
            Inicio
          </a>
          <a 
            href="#galeria" 
            className="font-medium text-enfoolens-dark hover:text-enfoolens-primary transition"
          >
            Lentes
          </a>
          <a 
            href="#servicios" 
            className="font-medium text-enfoolens-dark hover:text-enfoolens-primary transition"
          >
            Servicios
          </a>
          <a 
            href="#about" 
            className="font-medium text-enfoolens-dark hover:text-enfoolens-primary transition"
          >
            Nosotros
          </a>
          <a 
            href="#contacto" 
            className="font-medium text-enfoolens-dark hover:text-enfoolens-primary transition"
          >
            Contacto
          </a>
        </nav>

        {/* Acciones Desktop */}
        <div className="hidden md:flex items-center space-x-4">
         
          <button className="p-2 text-enfoolens-dark hover:text-enfoolens-primary transition">
            <FiUser size={20} />
          </button>
          <button className="p-2 text-enfoolens-dark hover:text-enfoolens-primary transition relative">
            <FiShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-enfoolens-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        {/* Menú Mobile - Botón Hamburguesa */}
        <button 
          className="md:hidden p-2 text-enfoolens-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú Mobile Expandido */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a 
              href="#inicio" 
              className="font-medium py-3 px-4 rounded-lg hover:bg-enfoolens-light text-enfoolens-dark"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#galeria" 
              className="font-medium py-3 px-4 rounded-lg hover:bg-enfoolens-light text-enfoolens-dark"
              onClick={() => setIsOpen(false)}
            >
              Lentes
            </a>
            <a 
              href="#servicios" 
              className="font-medium py-3 px-4 rounded-lg hover:bg-enfoolens-light text-enfoolens-dark"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#about" 
              className="font-medium py-3 px-4 rounded-lg hover:bg-enfoolens-light text-enfoolens-dark"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="font-medium py-3 px-4 rounded-lg hover:bg-enfoolens-light text-enfoolens-dark"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </nav>
          
          <div className="p-4 border-t border-enfoolens-light/30">
         
            
            <div className="flex justify-center space-x-6">
              <button className="p-2 text-enfoolens-dark hover:text-enfoolens-primary transition">
                <FiUser size={20} />
              </button>
              <button className="p-2 text-enfoolens-dark hover:text-enfoolens-primary transition relative">
                <FiShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-enfoolens-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};