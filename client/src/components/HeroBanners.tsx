import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroBanners: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
      autoplay={{
        delay: 52515151,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full">
          <img
            src="https://i.ibb.co/pnRhsJy/Untitled-design-1.png"
            alt="banner 1"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <img
            src="https://i.ibb.co/2yW31PK/Untitled-design-2.png"
            alt="banner 2"
            className="w-full"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <img
            src="https://i.ibb.co/Px5VXJY/Untitled-design-3.png"
            alt="banner 3"
            className="w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroBanners;
