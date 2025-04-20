import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FiSend, FiInstagram, FiFacebook, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

// ============ CONTACT COMPONENT ============
const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto").max(50),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido").max(12),
  message: z.string().min(10, "Mensaje muy breve").max(500)
});

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-enfoolens-primary/10 via-enfoolens-light/30 to-enfoolens-purple/10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-enfoolens-dark mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-enfoolens-dark/80 max-w-2xl mx-auto">
            ¿Tienes preguntas? Escríbenos y te responderemos a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 md:p-12"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-enfoolens-dark mb-2 font-medium">Nombre</label>
                <input
                  {...register("name")}
                  placeholder="Tu nombre completo"
                  className="w-full p-4 rounded-lg border-2 border-transparent focus:border-enfoolens-purple focus:ring-2 focus:ring-enfoolens-primary focus:ring-opacity-30 transition"
                />
                {errors.name && (
                  <p className="text-enfoolens-accent mt-2 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-enfoolens-dark mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="tu@email.com"
                    className="w-full p-4 rounded-lg border-2 border-transparent focus:border-enfoolens-purple focus:ring-2 focus:ring-enfoolens-primary focus:ring-opacity-30 transition"
                  />
                  {errors.email && (
                    <p className="text-enfoolens-accent mt-2 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-enfoolens-dark mb-2 font-medium">Teléfono</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+56 9 1234 5678"
                    className="w-full p-4 rounded-lg border-2 border-transparent focus:border-enfoolens-purple focus:ring-2 focus:ring-enfoolens-primary focus:ring-opacity-30 transition"
                  />
                  {errors.phone && (
                    <p className="text-enfoolens-accent mt-2 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-enfoolens-dark mb-2 font-medium">Mensaje</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tu mensaje..."
                  className="w-full p-4 rounded-lg border-2 border-transparent focus:border-enfoolens-purple focus:ring-2 focus:ring-enfoolens-primary focus:ring-opacity-30 transition"
                />
                {errors.message && (
                  <p className="text-enfoolens-accent mt-2 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-enfoolens-primary to-enfoolens-purple text-white font-semibold py-4 px-6 rounded-lg transition flex items-center justify-center gap-2 hover:shadow-lg"
              >
                Enviar Mensaje <FiSend />
              </button>
            </form>
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gradient-to-br from-enfoolens-primary to-enfoolens-purple text-white flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>
                <p className="opacity-90">
                  Estamos aquí para ayudarte con cualquier consulta sobre nuestros productos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaWhatsapp className="text-2xl text-white mt-1" />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a href="https://wa.me/56976611236" className="hover:underline opacity-90" target="_blank" rel="noopener noreferrer">
                      +56 9 7661 1236
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiMail className="text-2xl text-white mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:contacto@enfoolens.cl" className="hover:underline opacity-90">
                      contacto@enfoolens.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiMapPin className="text-2xl text-white mt-1" />
                  <div>
                    <h4 className="font-semibold">Ubicación</h4>
                    <p className="opacity-90">Madrid 1143, Santiago, Chile</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-3">Síguenos</h4>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                    <FiInstagram size={20} />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                    <FiFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
