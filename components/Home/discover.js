import Image from "next/image";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import ImgLeftToRight from "../ImgLeftToRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
function Discover() {
  const items = [
    { id: 1, src: "/icons/companyLogo.svg", alt: "2" },
    { id: 2, src: "/icons/companyLogo.svg", alt: "3" },
    { id: 3, src: "/icons/companyLogo.svg", alt: "4" },
    { id: 4, src: "/icons/companyLogo.svg", alt: "5" },
    { id: 5, src: "/icons/companyLogo.svg", alt: "6" },
    { id: 6, src: "/icons/companyLogo.svg", alt: "7" },
    { id: 7, src: "/icons/companyLogo.svg", alt: "8" },
    { id: 8, src: "/icons/companyLogo.svg", alt: "9" },
  ];
  const renderItems = items.map((item) => (
    <SwiperSlide key={item.id} className="">
      <Image
        className="!relative"
        width={166}
        height={69}
        src={item.src}
        alt={item.alt}
      ></Image>
    </SwiperSlide>
  ));

  return (
    <div className="relative w-full flex justify-center bg-white">
      <div className="relative 3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[738px] 2xl:mx-[auto] mx-[auto] relative flex flex-row items-center 2xl:gap-[148px] gap-[50px] w-full py-[54px]">
        <div className="text-[16px] leading-[24px] font-[400] text-black min-w-[155px] max-w-[155px] uppercase">
          Trusted by
          <br /> industry leading companies
        </div>
        <div className="relative  w-full 3xl:max-w-[1150px] 2xl:max-w-[784px] max-w-[518px] text-black block">
          <div className="swiper-button-prev absolute !2xl:left-[-98px] !left-[-25px] !w-[max-content]">
            <Image
              className=""
              src="/icons/Arrow_Right.svg"
              alt="Arrow_Right"
              width={12}
              height={19}
            ></Image>
          </div>
          <Swiper
            spaceBetween={80}
            slidesPerView={"auto"}
            onSlideChange={(swiper) => swiper.update()}
            onSwiper={(swiper) => console.log(swiper)}
            className="max-w-[100%] w-full"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1920: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
            }}
          >
            {renderItems}
          </Swiper>
          <div className="swiper-button-next absolute 3xl:right-[-98px] !right-[-25px] !w-[max-content]">
            <Image
              className=""
              src="/icons/Arrow_Right.svg"
              alt="Arrow_Right"
              width={12}
              height={19}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
