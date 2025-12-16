import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Counter } from "./Counter";

export const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  ];

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
     "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Meta_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    
  ];

  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-white flex flex-col justify-center"
      >
       
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

         
          <div className="space-y-6 mb-15text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Creative Digital 
              <span className="ml-3 text-blue-600 relative">
                     Solutions
                
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                >
                  <path
                    d="M0 4 Q100 0 200 4"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
              High-quality printing, branding & customized solutions
              trusted by companies across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
              <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                View Services
              </button>
            </div>
          </div>

          
          <div className="w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="h-full"
            >
              {heroImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt="Hero slide"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

       
        <div className="mt-14 bg-gray-50 py-3">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={4000}
            loop
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="max-w-6xl "
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="Company logo"
                  className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Counter />
      </section>
    </>
  );
};
