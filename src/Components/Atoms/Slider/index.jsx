import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider() {
  return (
    <Swiper
      autoplay
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/2/26/422556db-6902-47a1-b14a-d1eca16a9bda.jpg.webp?ect=4g" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/2/22/b9519e4c-81c6-4791-acc7-c192c5f524c9.jpg.webp?ect=4g" />
      </SwiperSlide>
    </Swiper>
  );
}
