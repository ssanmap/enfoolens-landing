import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { getCarrusel } from '../api/strapi';

interface SlideFromStrapi {
  id: number;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  cta: string;
  codigo?: string;
  activo: boolean;
  imagen: {
    url: string;
    name: string;
  };
}

export const HeroCarousel = () => {
  const [slides, setSlides] = useState<SlideFromStrapi[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const data = await getCarrusel();
        const activos = data.filter((slide: SlideFromStrapi) => 
          slide.activo && slide.imagen?.url
        );
        setSlides(activos);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSlides();
  }, []);

  if (loading) return (
    <div className="flex items-center justify-center h-[50vh] sm:h-[70vh]">
      <div className="animate-pulse text-enfoolens-primary">Cargando...</div>
    </div>
  );

  if (slides.length === 0) return (
    <div className="flex items-center justify-center h-[50vh] sm:h-[70vh] text-gray-500">
      No hay slides disponibles
    </div>
  );

  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-[50vh] sm:h-[70vh] lg:h-[80vh]"
      >
        {slides.map((slide) => {
          const imageUrl = slide.imagen.url 
            ? `http://localhost:1337${slide.imagen.url}`
            : '/placeholder.jpg';

          return (
            <SwiperSlide key={slide.id} className="relative overflow-hidden">
              {/* Imagen con enfoque en la parte superior */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={slide.titulo}
                  className="w-full h-full object-cover object-[center_top]"
                  style={{
                    objectPosition: 'center 30%', // 40% from top
                  }}
                />
              </div>

              {/* Overlay solo en la parte inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Contenido en esquina inferior izquierda */}
              <div className="absolute bottom-0 left-0 w-full sm:w-auto text-white p-4 sm:p-6 md:p-8 z-10">
                <div className="max-w-xl space-y-2 sm:space-y-3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-enfoolens-primary to-enfoolens-secondary">
                      {slide.titulo}
                    </span>
                  </h2>
                  
                  <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90">
                    {slide.subtitulo}
                  </p>
                  
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                    {slide.descripcion}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <button className="relative overflow-hidden group transform transition-all hover:scale-105">
                      <span className="absolute inset-0 bg-gradient-to-r from-enfoolens-primary to-enfoolens-secondary group-hover:from-enfoolens-secondary group-hover:to-enfoolens-primary transition-all duration-500" />
                      <span className="relative z-10 block px-5 py-2 sm:px-6 sm:py-2.5 text-sm font-bold tracking-wider uppercase">
                        {slide.cta}
                      </span>
                    </button>
                    
                    {slide.codigo && (
                      <span className="text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 transform transition-all hover:scale-105">
                        Usa código: <strong className="text-enfoolens-primary font-mono">{slide.codigo}</strong>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* Botones de navegación */}
        <div className="swiper-button-prev !hidden sm:!flex !left-4 !bottom-4 !top-auto !w-10 !h-10 md:!w-12 md:!h-12 !rounded-full !bg-white/10 !backdrop-blur-md hover:!bg-white/20 transition-all duration-300 border border-white/10 !text-enfoolens-secondary shadow-lg">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="swiper-button-next !hidden sm:!flex !right-4 !bottom-4 !top-auto !w-10 !h-10 md:!w-12 md:!h-12 !rounded-full !bg-white/10 !backdrop-blur-md hover:!bg-white/20 transition-all duration-300 border border-white/10 !text-enfoolens-secondary shadow-lg">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};