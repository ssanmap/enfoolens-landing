import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/56912345678?text=Hola%20ENFOOLENS,%20quisiera%20cotizar%20lentes"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 "
    >
      <FaWhatsapp size={32} />
      <span className="sr-only">Chat por WhatsApp</span>
    </a>
  );
};