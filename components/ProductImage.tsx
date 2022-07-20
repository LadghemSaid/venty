import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination, Navigation, Zoom } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

export default function ProductImage({ images = [] }) {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96">
      <Swiper
        modules={[Virtual, Pagination, Navigation, Zoom]}
        zoom
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((i, index) => {
          return (
            <SwiperSlide className="h-10" key={"swiper-photo-" + index}>
              <InnerImageZoom src={i} zoomSrc={i} className="select-none" />
              {/* <Image
                src={i}
                layout="fill"
                objectFit="contain"
              /> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
