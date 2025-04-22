// src/components/LocationMap.tsx
import React from "react";

export const LocationMap: React.FC = () => {
  return (
    <section id="ubicacion" className="py-12 bg-white">
      <h2 className="text-3xl text-center font-semibold mb-8 text-enfoolens-purple">
      Mapa de Enfoolens - Madrid 1143, Santiago
      </h2>
      <div className="mx-auto max-w-4xl aspect-video overflow-hidden rounded-2xl shadow-lg">
        <iframe
          title="Mapa de Enfoolens - Madrid 1143, Santiago"
          src="https://maps.google.com/maps?q=Madrid%201143%20Santiago%20Chile&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};
