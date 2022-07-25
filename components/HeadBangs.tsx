import React from "react";
import * as IconsOutline from "@heroicons/react/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper";
import { HEAD_BANGS, SHOW_HEAD_BANGS } from "contants";
import i18next from "i18next";

export default function HeadBangs() {
  if (!SHOW_HEAD_BANGS || HEAD_BANGS?.[i18next.language]?.length === 0) {
    //Hide if constant or empty array in languages
    return <></>;
  }

  return (
    <div className="h-8 bg-black  ">
      <Swiper
        loop
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        direction={"horizontal"}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {HEAD_BANGS[i18next.language].map((i, index) => {
          return (
            <SwiperSlide
              className="text-white font-normal flex items-center justify-center "
              key={"swiper-bandeau-" + index}
            >
              <span className="w-5 h-5 mr-2">
                {i.icon && IconsOutline[i.icon]()}
              </span>
              {i.text && <p>{i.text}</p>}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
