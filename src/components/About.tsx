import { motion } from "framer-motion";
import { CheckBadgeIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-br from-enfoolens-light/40 via-enfoolens-primary/20 to-enfoolens-purple/20"
    >
      {/* Burbujas decorativas cyan y moradas */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-16 left-12 w-36 h-36 rounded-full bg-enfoolens-primary/20 blur-xl" />
        <div className="absolute bottom-12 right-24 w-56 h-56 rounded-full bg-enfoolens-purple/20 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.h2
            whileHover={{ scale: 1.02 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-enfoolens-dark mb-4"
          >
            ENFOOLENS: <span className="text-enfoolens-primary">Visión</span> <span className="text-enfoolens-purple">con Estilo</span>
          </motion.h2>
          <motion.p
            whileHover={{ scale: 1.01 }}
            className="text-lg max-w-3xl mx-auto text-enfoolens-dark/80"
          >
            Líderes en innovación óptica, combinando tecnología avanzada con diseños de tendencia.
          </motion.p>
        </motion.div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: <CheckBadgeIcon className="w-10 h-10 text-enfoolens-primary" />,
              title: "Tecnología Avanzada",
              description: "Lentes con tratamientos premium anti-reflejo y protección UV400."
            },
            {
              icon: <SparklesIcon className="w-10 h-10 text-enfoolens-primary" />,
              title: "Diseños Exclusivos",
              description: "Colecciones únicas basadas en rostrología y tendencias."
            },
            {
              icon: <UserGroupIcon className="w-10 h-10 text-enfoolens-primary" />,
              title: "Expertos en Óptica",
              description: "Asesoramiento personalizado para tu estilo de vida."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(60,235,176,0.3), 0 10px 10px -5px rgba(155,89,229,0.3)",
                borderColor: "transparent",
                backgroundColor: "rgba(255,255,255,0.95)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-gradient-to-r hover:from-enfoolens-primary hover:to-enfoolens-purple"
            >
              {/* Borde cyan animado */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-enfoolens-primary to-enfoolens-purple"
              />

              <div className="flex flex-col items-center text-center h-full">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="mb-4 p-3 bg-gradient-to-br from-enfoolens-primary/10 to-enfoolens-purple/10 rounded-full"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-enfoolens-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-enfoolens-dark/70 flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Descripción */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-enfoolens-primary/5 via-enfoolens-purple/5 to-cyan-100/10 p-8 md:p-10 rounded-2xl shadow-inner border border-enfoolens-light/30"
        >
          <p className="text-center text-enfoolens-dark/90 text-lg md:text-xl leading-relaxed">
            En <strong className="text-enfoolens-primary">ENFOOLENS</strong> nos apasiona ayudarte a ver el mundo con claridad sin sacrificar estilo. Cada par de lentes es cuidadosamente seleccionado para ofrecerte calidad óptica excepcional.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(60,235,176,0.4), 0 10px 25px -5px rgba(155,89,229,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            href="/tienda"
            className="inline-block bg-gradient-to-r from-enfoolens-primary to-enfoolens-purple text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Descubre Nuestra Colección
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="ml-2 inline-block"
            >
              ✨
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
