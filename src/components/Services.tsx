import { FiEye, FiTruck, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const services = [
  { icon: <FiEye size={48} />, title: "Atención Personalizada", description: "Asesoría experta para encontrar tus lentes ideales." },
  { icon: <FiUsers size={48} />, title: "Convenios", description: "Descuentos exclusivos para empresas asociadas." },
  { icon: <FiTruck size={48} />, title: "Envíos a Todo Chile", description: "Recibe tus lentes donde estés." },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-enfoolens-dark">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition"
            >
              <div className="text-enfoolens-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};