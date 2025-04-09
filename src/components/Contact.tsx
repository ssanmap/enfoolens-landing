import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FiSend, FiInstagram, FiFacebook, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// ============ CONTACT COMPONENT ============
const contactSchema = z.object({
  name: z.string().min(2, "Nombre muy corto").max(50),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Teléfono inválido").max(12),
  message: z.string().min(10, "Mensaje muy breve").max(500)
});

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: any) => {
    // Lógica de envío
    console.log(data);
  };

  return (
    <section id="contacto" className="py-20 bg-enfoolens-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-enfoolens-dark mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-enfoolens-dark/80 max-w-2xl mx-auto">
            ¿Tienes preguntas? Escríbenos y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Formulario */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-enfoolens-dark mb-2 font-medium">Nombre</label>
                <input
                  {...register("name")}
                  placeholder="Tu nombre completo"
                  className="w-full p-4 rounded-lg border border-enfoolens-light/50 focus:border-enfoolens-primary focus:ring-2 focus:ring-enfoolens-primary/30 transition"
                />
                {errors.name && <p className="text-enfoolens-accent mt-2 text-sm">{errors.name.message}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-enfoolens-dark mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="tu@email.com"
                    className="w-full p-4 rounded-lg border border-enfoolens-light/50 focus:border-enfoolens-primary focus:ring-2 focus:ring-enfoolens-primary/30 transition"
                  />
                  {errors.email && <p className="text-enfoolens-accent mt-2 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-enfoolens-dark mb-2 font-medium">Teléfono</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+56 9 1234 5678"
                    className="w-full p-4 rounded-lg border border-enfoolens-light/50 focus:border-enfoolens-primary focus:ring-2 focus:ring-enfoolens-primary/30 transition"
                  />
                  {errors.phone && <p className="text-enfoolens-accent mt-2 text-sm">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-enfoolens-dark mb-2 font-medium">Mensaje</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tu mensaje..."
                  className="w-full p-4 rounded-lg border border-enfoolens-light/50 focus:border-enfoolens-primary focus:ring-2 focus:ring-enfoolens-primary/30 transition"
                ></textarea>
                {errors.message && <p className="text-enfoolens-accent mt-2 text-sm">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-enfoolens-primary hover:bg-enfoolens-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                Enviar Mensaje <FiSend className="ml-2" />
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="bg-gradient-to-br from-enfoolens-primary to-enfoolens-secondary p-8 md:p-12 flex flex-col justify-center text-white">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>
                <p className="opacity-90">Estamos aquí para ayudarte con cualquier consulta sobre nuestros productos.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaWhatsapp className="text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a 
                      href="https://wa.me/56976611236" 
                      className="hover:underline opacity-90"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +56 9 7661 1236
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiMail className="text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:contacto@enfoolens.cl" 
                      className="hover:underline opacity-90"
                    >
                      contacto@enfoolens.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FiMapPin className="text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Ubicación</h4>
                    <p className="opacity-90">Av. Principal 1234, Santiago, Chile</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-3">Síguenos</h4>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                    aria-label="Instagram"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
                    aria-label="Facebook"
                  >
                    <FiFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};