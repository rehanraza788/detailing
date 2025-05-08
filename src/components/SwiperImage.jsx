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
    {
      url: "https://thumbs.dreamstime.com/b/robust-steel-frame%E2%80%A6beam-assembly-image-showcases-371595243.jpg?w=992"
    },
    {
      url: "	https://thumbs.dreamstime.com/b/captivating-night-…t-bright-white-backdrop-image-349761600.jpg?w=992"
    },
    {
      url: "https://thumbs.dreamstime.com/b/beautifully-design…aesthetic-appeal-space-occupy-342777123.jpg?w=992"
    },
    {
      url: "	https://thumbs.dreamstime.com/b/rusty-metal-chain-…setting-close-up-view-reveals-347557317.jpg?w=992"
    },
    {
      url: "https://thumbs.dreamstime.com/b/commercial-buildin…re-safety-measures-structural-144449397.jpg?w=992"
    },
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
