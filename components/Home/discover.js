import Image from "next/image";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import ImgLeftToRight from "../ImgLeftToRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
function Discover() {
  // const items = [
  //   { id: 1, src: "/images/2.png", alt: "2" },
  //   { id: 2, src: "/images/3.png", alt: "3" },
  //   { id: 3, src: "/images/4.png", alt: "4" },
  //   { id: 4, src: "/images/5.png", alt: "5" },
  //   { id: 5, src: "/images/6.png", alt: "6" },
  // ];
  // const renderItems = items.map((item) => (
  //   <SwiperSlide key={item.id} className="relative 3xl:!w-[166px]">
  //     <Image
  //       className="!relative 3xl:max-w-[166px]"
  //       src={item.src}
  //       alt={item.alt}
  //       layout="fill"
  //     ></Image>
  //   </SwiperSlide>
  // ));
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
    <SwiperSlide key={item.id} className="relative !w-[166px]">
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
      <div className="relative 3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative flex flex-row items-center gap-[148px] w-full py-[54px]">
        <div className="text-[16px] leading-[24px] font-[400] text-black min-w-[155px] max-w-[155px] uppercase">
          Trusted by
          <br /> industry leading companies
        </div>
        <div className="relative w-full 3xl:max-w-[1150px] 2xl:max-w-[784px] text-black block">
          <div className="swiper-button-prev absolute !left-[-98px] !w-[max-content]">
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
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="max-w-[100%] w-full"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1920: {
                slidesPerView: 5,
              },
            }}
          >
            {renderItems}
          </Swiper>
          <div className="swiper-button-next absolute !right-[-98px] !w-[max-content]">
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
