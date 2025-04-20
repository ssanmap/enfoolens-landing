import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getCarrusel } from '../api/strapi';

interface SlideFromStrapi {
  id: number;
  titulo: string;
  subtitulo: string;
  cta?: string;
  activo: boolean;
  imagen: { url: string };
}

export const HeroCarousel: React.FC = () => {
  const [slides, setSlides] = useState<SlideFromStrapi[]>([]);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getCarrusel();
        console.log('data', data);
        setSlides(data.filter((s: any) => s.activo && s.imagen?.url));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center h-[60vw] 2xl:h-[50vw] max-h-[80vh] min-h-[50vh]">
      <div className="animate-pulse text-enfoolens-purple">Cargando…</div>
    </div>
  );

  if (!slides.length) return (
    <div className="flex items-center justify-center h-[60vw] 2xl:h-[50vw] max-h-[80vh] min-h-[50vh] text-gray-500">
      No hay slides disponibles
    </div>
  );

  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="h-[60vw] 2xl:h-[50vw] max-h-[80vh] min-h-[50vh]"
      >
        {slides.map((slide) => {
          const imageUrl = slide.imagen.url.startsWith('http')
            ? slide.imagen.url
            : `https://cms-enfoolens-production.up.railway.app/${slide.imagen.url}`;
          return (
            <SwiperSlide key={slide.id} className="relative">
              {/* Imagen con zoom dinámico */}
              <img
                src={imageUrl}
                alt={slide.titulo}
                className="absolute inset-0 w-full h-full object-cover object-[center_25%]
                           transform scale-100 2xl:scale-85 transition-all duration-700"
              />

              {/* Overlay morado suave */}
              <div className="absolute inset-0 " />

              {/* Contenido: móvil centro, XL izquierda */}
              <div className="absolute inset-0 flex flex-col justify-end px-4 pb-12 lg:pb-24 xl:pb-32 xl:pl-24
                                 items-center xl:items-start text-center xl:text-left z-10">
                <h2 className="font-extrabold text-[clamp(1.5rem,6vw,3.5rem)]
                               bg-clip-text text-transparent bg-gradient-to-r
                               from-enfoolens-primary to-enfoolens-purple">
                  {slide.titulo}
                </h2>
                <p className="mt-2 text-[clamp(1rem,4vw,1.5rem)] text-white">
                  {slide.subtitulo}
                </p>
                {slide.cta && (
                  <button className="mt-4 px-6 py-2 rounded-full font-semibold
                                     bg-enfoolens-purple hover:bg-enfoolens-purple-dark
                                     transition">
                    {slide.cta}
                  </button>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Flechas con hover morado */}
      <button
        ref={prevRef}
        className="group absolute top-1/2 left-4 z-20 -translate-y-1/2
                   w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20
                   backdrop-blur-md hover:bg-enfoolens-purple transition flex
                   items-center justify-center"
      >
        <svg className="w-5 h-5 text-enfoolens-purple group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="group absolute top-1/2 right-4 z-20 -translate-y-1/2
                   w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20
                   backdrop-blur-md hover:bg-enfoolens-purple transition flex
                   items-center justify-center"
      >
        <svg className="w-5 h-5 text-enfoolens-purple group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
