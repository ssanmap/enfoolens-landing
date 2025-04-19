import React from 'react';
import { FiEye, FiTruck, FiUsers } from 'react-icons/fi';
import { FaSyncAlt, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: <FiEye size={32} className="text-white" />, // Máxima Calidad
    title: 'Máxima Calidad',
    description: 'Utilizamos materiales premium y procesos de fabricación de alta precisión para una experiencia visual insuperable.',
    gradient: 'from-purple-600 to-purple-400'
  },
  {
    id: 2,
    icon: <FiTruck size={32} className="text-white" />, // Envío Express
    title: 'Envío Express',
    description: 'Entrega en 24-48 horas con seguimiento en tiempo real de tu pedido y notificaciones personalizadas.',
    gradient: 'from-indigo-600 to-indigo-400'
  },
  {
    id: 3,
    icon: <FaMedal size={32} className="text-white" />, // Garantía de 2 Años
    title: 'Garantía de 2 Años',
    description: 'Todos nuestros productos incluyen garantía extendida contra defectos y servicio de mantenimiento.',
    gradient: 'from-violet-600 to-violet-400'
  },
  {
    id: 4,
    icon: <FaSyncAlt size={32} className="text-white" />, // 30 Días de Prueba
    title: '30 Días de Prueba',
    description: 'Devolución sin complicaciones si no estás completamente satisfecho con tu compra. Tu satisfacción es nuestra prioridad.',
    gradient: 'from-fuchsia-600 to-fuchsia-400'
  }
];

export const Features: React.FC = () => {
  return (
    <section  id="servicios" className="py-24 md:py-32 bg-white relative overflow-hidden" >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-purple-500"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-700"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-8 border-purple-300"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-4 border-purple-400"></div>
        <svg className="absolute top-1/2 left-1/3 w-96 h-96 text-purple-200 opacity-20" viewBox="0 0 100 100" fill="none">
          <path d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 90C27.9 90 10 72.1 10 50C10 27.9 27.9 10 50 10C72.1 10 90 27.9 90 50C90 72.1 72.1 90 50 90Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Nuestros Beneficios
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Por qué elegir <span className="text-purple-600">EnfooLens</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia y la satisfacción del cliente nos diferencia en cada aspecto de nuestra experiencia.
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group bg-white rounded-2xl shadow-xl hover:shadow-2xl p-8 border border-gray-100 transition-all duration-500 relative overflow-hidden ${index % 2 === 0 ? 'md:translate-y-8' : ''}`}
            >
              {/* Fondo gradiente icono */}
              <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

              <div className="flex">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg mr-5`}>                  
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* barra inferior animada */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-400 text-white text-base font-semibold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            <span>Descubre Más Ventajas</span>
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
