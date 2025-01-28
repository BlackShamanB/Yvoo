import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useRef, useState, useEffect } from "react";
import ImgLeftToRight from "../ImgLeftToRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade } from "swiper/modules";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "swiper/css/effect-fade";
import LoadOnLoad from "../LoadOnLoad";

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(1000);
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100); // Задержка между появлением букв

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

function Sales({ handleModal }) {
  const overlayContent = [
    <div
      key="0"
      className="absolute md:top-[252px] top-[41px] -translate-x-[50%] 2xl:left-[calc(92%)] md2:left-[calc(50%_+_330px)] md:left-[calc(50%_+_250px)] left-[calc(50%_+_68px)] flex flex-col gap-[9px] justify-start"
    >
      <div className="text-white text-[24px] leading-[30px] font-[700]">
        <div className="map1-click-animate flex flex-row items-center md:gap-[13px] gap-[8px] rounded-[30px] bg-green shadow-custom md:p-[12px_30px_12px_24px] p-[12px_20px]">
          <Image
            src="/icons/map1-click.svg"
            width={26}
            height={36}
            alt="map1-click"
            className="md:max-w-[26px] max-w-[23px] md:max-h-[36px] max-h-[32px]"
          />
          <div className="md:text-[24px] text-[18px] text-nowrap md:leading-[30px] leading-[26px] font-[600]">
            1-Click
          </div>
        </div>
      </div>
      <div className="map1-dot-animate md:w-[24px] w-[11px] md:h-[24px] h-[11px] bg-green rounded-[50%] md:ml-[9px] ml-[34px]"></div>
    </div>,
    <div key="1" className="top-0 left-0">
      <div className="text-black text-[16px] leading-[20px] font-[500] absolute bg-white rounded-[26px] select-none cursor-default flex flex-row gap-[20px] items-center md:p-[14px_20px] p-[12px_20px] md:w-[404px] w-[100%] md:max-w-[404px] max-w-[278px] md:top-[54px] top-[20px] left-[50%] transfotm -translate-x-1/2">
        <Image
          src="/icons/Search.svg"
          width={24}
          height={24}
          alt="Search"
          className=""
        />
        <TypingAnimation text="Auditors" />
      </div>
      <Image
        src="/icons/map_balloon.svg"
        width={48}
        height={60}
        alt="map_balloon"
        className="absolute md:top-[212px] top-[103px] md:max-w-[48px] max-w-[23px] md:max-h-[60px] max-h-[29px] md:left-[69px] left-[30px] transform -md:translate-x-[0] -translate-x-[50%] baloonMap-animate"
      />
      <Image
        src="/icons/map_balloon.svg"
        width={32}
        height={40}
        alt="map_balloon"
        className="absolute md:top-[395px] top-[186px] md:max-w-[32px] max-w-[16px] md:max-h-[40px] max-h-[19px] md:left-[132px] left-[65px] -md:translate-x-[0] -translate-x-[50%] baloonMap-animate"
      />
      <Image
        src="/icons/map_balloon.svg"
        width={32}
        height={40}
        alt="map_balloon"
        className="absolute md:top-[275px] top-[141px] md:max-w-[32px] max-w-[17px] md:max-h-[40px] max-h-[20px] md:left-[361px] left-[167px] -md:translate-x-[0] -translate-x-[50%] baloonMap-animate"
      />
      <div className="absolute md:top-[133px] top-[80px] md:left-[427px] left-[calc(50%)] -md:translate-x-[0] -translate-x-[50%]">
        <Image
          src="/icons/map_balloon.svg"
          width={95}
          height={119}
          alt="map_balloon"
          className="md:max-w-[95px] max-w-[40px] md:max-h-[119px] max-h-[49px] baloonMap-animate"
        />
        <Image
          src="/icons/map_ballon_check.svg"
          width={37}
          height={37}
          alt="map_balloon"
          className="absolute top-[0] md:left-[91px] left-[36px] md:max-w-[37px] max-w-[16px] md:max-h-[37px] max-h-[16px] baloonMap-animate"
        />
      </div>
      <Image
        src="/icons/map_balloon.svg"
        width={48}
        height={60}
        alt="map_balloon"
        className="absolute md:top-[248px] top-[122px] md:left-[537px] right-[69px] md:max-w-[48px] max-w-[23px] md:max-h-[60px] max-h-[27px] -md:translate-x-[0] -translate-x-[50%] baloonMap-animate"
      />
      <Image
        src="/icons/map_balloon.svg"
        width={32}
        height={40}
        alt="map_balloon"
        className="absolute md:top-[272px] top-[139px] md:left-[673px] right-[26px] md:max-w-[32px] max-w-[17px] md:max-h-[40px] max-h-[20px] -md:translate-x-[0] -translate-x-[50%] baloonMap-animate"
      />
    </div>,
    <div
      key="2"
      className="absolute md:top-[-30px] top-[-10px] md:left-[-50px] left-[29px] md:max-w-[572px] max-w-[262px]"
    >
      <Image
        src="/icons/map_chat.svg"
        width={572}
        height={690}
        alt="map_balloon"
        className=""
      />
    </div>,
    <div
      key="3"
      className="absolute md:top-[-37px] top-[-10px] left-[50%] transfotm -translate-x-1/2 md:max-w-[534px] max-w-[239px] md:w-[100%] w-[239px]"
    >
      <Image
        src="/icons/map_pad.svg"
        width={534}
        height={705}
        alt="map_pad"
        className="md:max-w-[unset] max-w-[100%]"
      />
    </div>,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    console.log(swiper.realIndex);
    setCurrentSlide(swiper.realIndex);
  };

  const items = [
    {
      id: 1,
      header: "Place an Audit Request with 1 Click",
      content:
        "Easily schedule a supplier audit through YVOO's platform or integrate it with your ERP system. With just a click, you can request an audit, making the process hassle-free.",
    },
    {
      id: 2,
      header: "Auto-Dispatch to Local Auditors",
      content:
        "YVOO automatically assigns certified auditors from our global network to your supplier location. Geo-locator technology ensures local expertise, ensuring accurate results.",
    },
    {
      id: 3,
      header: "Monitor Audits in Real-Time",
      content:
        "Stay updated with real-time tracking of your audit process. Communicate directly with auditors for transparency and receive notifications for key audit milestones.",
    },
    {
      id: 4,
      header: "Receive Comprehensive Reports",
      content:
        "Get detailed audit reports with data-driven insights, photos, and compliance documentation. Reports provide all the information needed for confident decisions.",
    },
  ];
  const renderItems = items.map((item, index) => (
    // <CSSTransition
    //   key={index + 1}
    //   timeout={500}
    //   classNames="slide"
    // >
    <SwiperSlide key={item.id} className="md:mt-[96px] mt-[28px] bg-blue">
      <div className="flex md:flex-row flex-col gap-[20px]">
        <div className="text-white md:text-[120px] text-[60px] md:leading-[120px] leading-[60px] font-[800]">
          0{item.id}
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="text-black md:text-[24px] text-[18px] md:leading-[30px] leading-[26px] font-[700]">
            {item.header}
          </div>
          <div className="text-black md:text-[20px] text-[16px] md:leading-[30px] leading-[22px] font-[400]">
            {item.content}
          </div>
        </div>
      </div>
    </SwiperSlide>
    // </CSSTransition>
  ));
  return (
    <div
      id="sales"
      className="relative w-full flex flex-col justify-center bg-blue 2xl:pl-[169px] 2xl:pr-[202px] md:px-[20px] px-[12px] md:pb-[144px] pb-[72px]"
    >
      <LoadOnLoad>
        <div className="relative 3xl:max-w-[1516px] 2xl:max-w-[100%] max-w-[100%] relative grid 3xl:grid-cols-[743px_1fr] 2xl:grid-cols-2 2xl:justify-center md:pt-[170px] pt-[130px] md:gap-[133px] gap-[40px]">
          <div className="md:hidden block text-white md:text-[40px] text-[28px] md:leading-[48px] leading-[34px] font-[800] md:mt-[60px] md:px-[0] px-[29px]">
            How does YVOO Work
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/icons/Map2.svg"
              width={743}
              height={656}
              alt="triangle"
              className="2xl:max-w-[100%] max-w-[100%]"
            />
            {overlayContent[currentSlide]}
          </div>
          <div className="w-full text-black block">
            <div className="w-full">
              <div className="md:block hidden md:max-w-[673px] max-w-[278px] mx-[auto] text-white md:text-[40px] text-[28px] md:leading-[48px] leading-[34px] font-[800] md:mt-[60px] md:px-[0] px-[29px]">
                How does YVOO Work
              </div>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true} // Закольцованный слайдер
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
                modules={[Navigation, Pagination]}
                className="md:max-w-[673px] max-w-[278px] md2:mb-[100px] mb-[36px]"
                // effect="fade"
              >
                {/* <TransitionGroup> */}
                {renderItems}
                {/* </TransitionGroup> */}
              </Swiper>
              <div className="flex flex-row gap-[60px] md2:justify-end justify-center">
                <div className="button-prev">
                  <div className="flex items-center md2:gap-[31px] gap-[21px]">
                    <div className="text-white md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] 2md:font-[700] font-[600] ml-2 min-w-[32px] w-[32px]">
                      0{currentSlide === 0 ? items.length : currentSlide}
                    </div>
                    <Image
                      src="/icons/map_arrow.svg" // Замените на путь к вашей стрелке
                      width={71}
                      height={18}
                      alt="prev"
                      className="rotate-[180deg] md2:max-w-[unset] max-w-[58px]"
                    />
                  </div>
                </div>
                <div className="button-next">
                  <div className="flex items-center md2:gap-[31px] gap-[21px]">
                    <Image
                      src="/icons/map_arrow.svg" // Замените на путь к вашей стрелке
                      width={71}
                      height={18}
                      alt="next"
                      className="md2:max-w-[unset] max-w-[58px]"
                    />
                    <div className="text-white md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] 2md:font-[700] font-[600] mr-2 min-w-[32px] w-[32px]">
                      0
                      {currentSlide === items.length - 1 ? 1 : currentSlide + 2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadOnLoad>
    </div>
  );
}

export default Sales;
