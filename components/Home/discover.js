import Image from "next/image";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import ImgLeftToRight from "../ImgLeftToRight";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Discover() {
  const items = [
    { id: 1, src: "/images/2.png", alt: "2" },
    { id: 2, src: "/images/3.png", alt: "3" },
    { id: 3, src: "/images/4.png", alt: "4" },
    { id: 4, src: "/images/5.png", alt: "5" },
    { id: 5, src: "/images/6.png", alt: "6" },
  ];
  const renderItems = items.map((item) => (
    <SwiperSlide key={item.id} className="!w-[166px]">
      <Image
        className="!relative max-w-[166px]"
        src={item.src}
        alt={item.alt}
        layout="fill"
      ></Image>
    </SwiperSlide>
  ));

  return (
    <div className="relative w-full flex justify-center bg-white">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative flex flex-row items-center gap-[148px] w-full py-[54px]">
        <div className="text-[16px] leading-[24px] font-[400] text-black max-w-[155px] uppercase">
          Trusted by<br/> industry leading companies
        </div>
        <div className="w-full max-w-[1162px] text-black block">
          <Swiper
            spaceBetween={80}
            slidesPerView={'auto'}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="max-w-[100%]"
          >
            {renderItems}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Discover;
