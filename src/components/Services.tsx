import { FiEye, FiTruck, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  { icon: <FiEye size={48} />, title: "Atención Personalizada", description: "Asesoría experta para encontrar tus lentes ideales." },
  { icon: <FiUsers size={48} />, title: "Convenios", description: "Descuentos exclusivos para empresas asociadas." },
  { icon: <FiTruck size={48} />, title: "Envíos a Todo Chile", description: "Recibe tus lentes donde estés." },
];

export const Services: React.FC = () => {
  return (
    <section id="x" className="py-20 bg-gradient-to-br from-enfoolens-light/40 via-enfoolens-primary/20 to-enfoolens-purple/20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-enfoolens-dark"
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(60,235,176,0.3), 0 10px 10px -5px rgba(155,89,229,0.3)",
                borderColor: "transparent"
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-gradient-to-r hover:from-enfoolens-primary hover:to-enfoolens-purple relative"
            >
              {/* Icono con fondo mixto */}
              <div className="mb-4 p-4 rounded-full bg-gradient-to-br from-enfoolens-primary/10 to-enfoolens-purple/10 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-enfoolens-dark mb-2">
                {service.title}
              </h3>
              <p className="text-enfoolens-dark/70">
                {service.description}
              </p>
              {/* Línea inferior degradada */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-enfoolens-primary to-enfoolens-purple"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
