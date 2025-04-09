import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    id: 1,
    title: "2X1 + 25% OFF",
    highlight: "Lentes premium", // Texto destacado breve
    bullets: "✓ Anti-reflejo ✓ Garantía", 
    code: "ENFO25",
    image: "assets/f12.png", // Imagen optimizada
    cta: "Quiero esta oferta",
    textPosition: "left",
    overlay: "gradient", // 'solid' o 'gradient'
    bgColor: "bg-white" // Color de fondo para esta slide
  },
  {
    id: 2,
    title: "VERANO 2024",
    highlight: "Lentes premium", // Texto destacado breve
    bullets: "✓ Anti-reflejo ✓ Garantía", 
    image: "assets/efe10.png",
    cta: "Descubrir colección",
    textPosition: "right",
    overlay: "gradient",
    bgColor: "bg-white" // Fondo azul claro para combinar con la imagen
  }, {
    id: 3,
    title: "Premium 2X1",
    highlight: "", // Texto destacado breve
    bullets: "✓ Anti-reflejo ✓ Garantía", 
    code: "",
    image: "assets/efe11.png", // Imagen optimizada
    cta: "Quiero esta oferta",
    textPosition: "left",
    overlay: "gradient", // 'solid' o 'gradient'
    bgColor: "bg-white" // Color de fondo para esta slide
  },
];

export const HeroCarousel = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet !bg-enfoolens-primary'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={`relative ${slide.bgColor}`}>
            {/* Container para la imagen con posicionamiento ajustado */}
            <div className="absolute inset-0 flex items-start justify-center">
              <div className="w-full h-full relative pt-0 lg:pt-6">
                <img 
                  src={slide.image}
                  alt={slide.title}
                  className="w-auto h-full max-h-full max-w-full object-contain mx-auto transition-transform duration-1000 ease-linear"
                  loading="eager"
                  style={{
                    filter: "brightness(1.1) contrast(1.1)",
                    objectPosition: "center 30%" // Ajustado para mostrar más arriba (enfoca los lentes)
                  }}
                />
              </div>
            </div>
            
            {/* Overlay dinámico */}
            {slide.overlay === 'gradient' ? (
              <div className={`absolute inset-0 bg-gradient-to-${slide.textPosition === 'left' ? 'r' : 'l'} from-black/60 via-black/30 to-transparent`} />
            ) : (
              <div className="absolute inset-0 bg-black/40" />
            )}
            
            {/* Contenido persuasivo */}
            <div className={`absolute inset-0 z-10 flex ${
              slide.textPosition === 'left' 
                ? 'justify-start text-left pl-4 sm:pl-6 md:pl-12 lg:pl-20' 
                : 'justify-end text-right pr-4 sm:pr-6 md:pr-12 lg:pr-20'
            }`}>
              <div className="self-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-white">
                
                {/* Título con énfasis - Responsive */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-enfoolens-primary to-enfoolens-secondary">
                    {slide.title}
                  </span>
                </h2>
                
                {/* Subtítulo - Responsive */}
                <p className="text-base sm:text-lg md:text-xl font-medium mb-2 md:mb-3">
                  {slide.highlight}
                </p>
                
                {/* Descripción - Responsive */}
                <p className="text-sm sm:text-base md:text-lg mb-3 md:mb-4">
                  {slide.bullets}
                </p>
                
                {/* CTA destacado - Responsive */}
                {slide.code ? (
                  <div className="inline-flex flex-col items-start">
                    <button className="bg-gradient-to-r from-enfoolens-primary to-enfoolens-secondary text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105 mb-2 text-sm sm:text-base">
                      {slide.cta}
                    </button>
                    <span className="text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-2 sm:px-4 py-1 rounded-full">
                      Usa código: <strong className="text-enfoolens-primary">{slide.code}</strong>
                    </span>
                  </div>
                ) : (
                  <button className="bg-gradient-to-r from-enfoolens-primary to-enfoolens-secondary text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base">
                    {slide.cta}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Flechas de navegación premium */}
        <div className="swiper-button-prev !hidden sm:!flex !left-2 md:!left-4 !w-8 !h-8 md:!w-10 md:!h-10 !rounded-full !bg-white/10 !backdrop-blur-sm hover:!bg-white/20 transition-all duration-300">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next !hidden sm:!flex !right-2 md:!right-4 !w-8 !h-8 md:!w-10 md:!h-10 !rounded-full !bg-white/10 !backdrop-blur-sm hover:!bg-white/20 transition-all duration-300">
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};