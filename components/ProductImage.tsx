import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Virtual, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/bundle";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { ProductStore } from "pages/_app";
export default function ProductImage({ variantes = [] }) {
  const [imageList, setimageList] = useState<string[]>([]);
  useEffect(() => {
    setimageList(
      variantes.map((variante) => {
        return variante.images;
      })
    );
  }, []);

  const [firstSwiper, setFirstSwiper] = useState(null);
  const ProductStoreContext = useContext(ProductStore);
  ProductStoreContext.setSwiperProductPhoto(firstSwiper);
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96">
      <Swiper
        modules={[Virtual, Pagination, Navigation]}
        zoom
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={50}
        slidesPerView={1}
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
