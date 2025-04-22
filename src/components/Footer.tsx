import { FiInstagram, FiFacebook, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-enfoolens-dark text-enfoolens-light py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">ENFOOLENS</h3>
            <p className="text-enfoolens-light/80 mb-4">
              Lentes de calidad que combinan diseño y funcionalidad para tu vida diaria.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/enfoolens.cl"
                target="_blank" 
                className="text-enfoolens-light/70 hover:text-white transition"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/enfoolens.cl"
                target="_blank" 
                className="text-enfoolens-light/70 hover:text-white transition"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-enfoolens-light/80 hover:text-white transition">Inicio</a></li>
              <li><a href="#galeria" className="text-enfoolens-light/80 hover:text-white transition">Productos</a></li>
              <li><a href="#contacto" className="text-enfoolens-light/80 hover:text-white transition">Contacto</a></li>
              <li><a href="#" className="text-enfoolens-light/80 hover:text-white transition">Nosotros</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-enfoolens-light/80">
                <FiPhone /> +56 9 7661 1236
              </li>
              <li className="flex items-center gap-2 text-enfoolens-light/80">
                <FiMail /> contacto@enfoolens.cl
              </li>
              <li className="flex items-center gap-2 text-enfoolens-light/80">
                <FiMapPin /> Madrid 1143, Santiago
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos */}
        <div className="border-t border-enfoolens-dark/30 pt-8 text-center text-enfoolens-light/60">
          <p>© {new Date().getFullYear()} ENFOOLENS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};