import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
//
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function SwiperImage() {
  const images = [
    { url: "/public/images/image-1.jpg" },
    { url: "/public/images/image-2.jpg" },
    { url: "/public/images/image-3.jpg" },
    { url: "/public/images/image-4.jpg" },
    { url: "/public/images/image-5.jpg" },
    { url: "/public/images/image-6.jpg" }
  ];
  return (
    <>
      <div>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            type: "bullets",
            clickable: true
          }}
          modules={[Autoplay, Pagination]}
          className="imageSwipper"
        >
          {images.map((curImg) => {
            return (
              <SwiperSlide>
                <div className="image-container z-1">
                  <img
                    src={curImg.url}
                    alt=""
                    className="xl:h-screen   xl:w-full"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperImage;
