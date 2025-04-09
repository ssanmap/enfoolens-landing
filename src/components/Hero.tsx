import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-enfoolens-primary to-blue-600 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center px-6 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Encuentra los <span className="text-enfoolens-accent">lentes perfectos</span>
        </h1>
        <p className="text-xl text-white mb-8">Solo en ENFOOLENS</p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/message/EZCYJRKWLRGHB1"
          className="inline-block bg-enfoolens-accent text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          ¡Cotiza por WhatsApp!
        </motion.a>
      </motion.div>
      <div className="absolute inset-0 bg-opacity-20 bg-black"></div>
    </section>
  );
};