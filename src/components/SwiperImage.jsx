import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./style.css";
//
// import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FiArrowRight, FiPlay, FiPhone } from "react-icons/fi";

function SwiperImage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
      title: "Structural Design Vision",
      subtitle: "Bringing years of expertise to innovative steel detailing solutions",
      badge: "15+ Years Experience"
    },
    {
      url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80", 
      title: "Engineering Excellence", 
      subtitle: "Professional structural steel detailing with proven industry experience",
      badge: "Expert Team"
    },
    {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
      title: "Precision & Innovation",
      subtitle: "Advanced 3D modeling technology meets decades of field experience",
      badge: "Latest Technology"
    }
  ];

  return (
    <>
      <div className="relative overflow-hidden">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{
            type: "bullets",
            clickable: true
          }}
          effect="fade"
          speed={1000}
          modules={[Autoplay, Pagination, EffectFade]}
          className="heroSwiper"
        >
          {images.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="relative h-[70vh] w-full">
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80";
                    }}
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                  
                  {/* Hero Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                      <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-gray-700/80 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          {slide.badge}
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                          {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
                          {slide.subtitle}
                        </p>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group hover:shadow-lg">
                            Start Your Project
                            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </button>
                          <button className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                            <FiPlay className="w-5 h-5" />
                            See Our Work
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Modern Contact FAB */}
        <div className="absolute bottom-8 right-8 z-20">
          <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <FiPhone className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SwiperImage;
