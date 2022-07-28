import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { ProductStore } from "pages/_app";
import { GAevent } from "@/lib/utils";
export default function ProductImage({ variantes = [] }) {
  const [imageList, setimageList] = useState<string[]>([]);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const ProductStoreContext = useContext(ProductStore);
  useEffect(() => {
    ProductStoreContext.setSwiperProductPhoto(firstSwiper);
    if (variantes.length) {
      setimageList(
        variantes.map((variante) => {
          return variante?.images?.join(",") || "";
        })
      );
    }
  }, [firstSwiper]);
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96">
      <Swiper
        modules={[Virtual, Pagination, Navigation]}
        zoom
        navigation
        initialSlide={0}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideNextTransitionEnd={() => {
          GAevent({
            action: "slide:slideNext",
          });
        }}
        onSlidePrevTransitionEnd={() => {
          GAevent({
            action: "slide:slidePrev",
          });
        }}
        onSwiper={setFirstSwiper}
        controller={firstSwiper}
      >
        {imageList &&
          imageList.map((i, index) => {
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
