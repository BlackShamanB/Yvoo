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
import { EffectFade } from 'swiper/modules';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'swiper/css/effect-fade';


const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(1000)
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
      className="absolute top-[252px] -right-[45px] flex flex-col gap-[9px] justify-start"
    >
      <div className="text-white text-[24px] leading-[30px] font-[700]">
        <div className="map1-click-animate flex flex-row items-center gap-[13px] rounded-[30px] bg-mint p-[12px_30px_12px_24px]">
          <Image
            src="/icons/map1-click.svg"
            width={26}
            height={36}
            alt="map1-click"
            className=""
          />
          <div className="text-[24px] leading-[30px] font-[600]">1-Click</div>
        </div>
      </div>
      <div className="map1-dot-animate w-[24px] h-[24px] bg-mint rounded-[50%] ml-[9px]"></div>
    </div>,
    <div key="1" className="top-0 left-0">
      <div className="text-black text-[16px] leading-[20px] font-[500] absolute bg-white rounded-[26px] select-none cursor-default flex flex-row gap-[20px] items-center p-[14px_20px] w-[404px] top-[54px] left-[50%] transfotm -translate-x-1/2">
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
        className="absolute top-[212px] max-w-[48px] max-h-[60px] left-[69px] baloonMap-animate"
      />
      <Image
        src="/icons/map_balloon.svg"
        width={32}
        height={40}
        alt="map_balloon"
        className="absolute top-[395px] max-w-[32px] max-h-[40px] left-[132px] baloonMap-animate"
      />
      <Image
        src="/icons/map_balloon.svg"
        width={32}
        height={40}
        alt="map_balloon"
        className="absolute top-[275px] max-w-[32px] max-h-[40px] left-[361px] baloonMap-animate"
      />
      <div className="absolute top-[133px] left-[427px]">
        <Image
          src="/icons/map_balloon.svg"
          width={95}
          height={119}
          alt="map_balloon"
          className="max-w-[95px] max-h-[119px] baloonMap-animate"
        />
        <Image
          src="/icons/map_ballon_check.svg"
          width={37}
          height={37}
          alt="map_balloon"
          className="absolute top-[0] left-[91px] max-w-[37px] max-h-[37px] baloonMap-animate"
        />
      </div>
      <Image
        src="/icons/map_balloon.svg"
        width={48}
        height={60}
        alt="map_balloon"
        className="absolute top-[248px] left-[537px] max-w-[48px] max-h-[60px] baloonMap-animate"
      />
      <Image
        src="/icons/map_balloon.svg"
        width={32}
        height={40}
        alt="map_balloon"
        className="absolute top-[272px] left-[673px] max-w-[32px] max-h-[40px] baloonMap-animate"
      />
    </div>,
    <div key="2" className="absolute -top-[30px] -left-[50px]">
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
      className="absolute -top-[37px] left-[50%] transfotm -translate-x-1/2"
    >
      <Image
        src="/icons/map_pad.svg"
        width={534}
        height={705}
        alt="map_pad"
        className="max-w-[unset]"
      />
    </div>,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    console.log(swiper.realIndex)
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
      <SwiperSlide key={item.id} className="mt-[96px] bg-blue">
        <div className="flex flex-row gap-[20px]">
          <div className="text-white text-[120px] leading-[120px] font-[800]">
            0{item.id}
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="text-black text-[24px] leading-[30px] font-[700]">
              {item.header}
            </div>
            <div className="text-black text-[20px] leading-[30px] font-[400]">
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
      className="relative w-full flex flex-col justify-center bg-blue 2xl:pl-[169px] 2xl:pr-[202px] px-[20px] pb-[144px]"
    >
      <div className="relative 3xl:max-w-[1516px] 2xl:max-w-[100%] md:max-w-[598px] relative grid 3xl:grid-cols-[743px_1fr] 2xl:grid-cols-2 2xl:justify-center pt-[170px] gap-[133px]">
        <div className="relative">
          <Image
            src="/icons/Map2.svg"
            width={743}
            height={656}
            alt="triangle"
            className=""
          />
          {overlayContent[currentSlide]}
        </div>
        <div className="w-full text-black block">
          <div className="w-full">
            <div className="text-white text-[40px] leading-[48px] font-[800] mt-[60px]">
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
              className="max-w-[673px] mb-[100px]"
              // effect="fade"
            >
            {/* <TransitionGroup> */}
              {renderItems}
              {/* </TransitionGroup> */}
            </Swiper>
            <div className="flex flex-row gap-[60px] justify-end">
              <div className="button-prev">
                <div className="flex items-center gap-[31px]">
                  <div className="text-white text-[24px] leading-[30px] font-[700] ml-2 min-w-[32px] w-[32px]">
                    0{currentSlide === 0 ? items.length : currentSlide}
                  </div>
                  <Image
                    src="/icons/map_arrow.svg" // Замените на путь к вашей стрелке
                    width={71}
                    height={18}
                    alt="prev"
                    className="rotate-[180deg]"
                  />
                </div>
              </div>
              <div className="button-next">
                <div className="flex items-center gap-[31px]">
                  <Image
                    src="/icons/map_arrow.svg" // Замените на путь к вашей стрелке
                    width={71}
                    height={18}
                    alt="next"
                  />
                  <div className="text-white text-[24px] leading-[30px] font-[700] mr-2 min-w-[32px] w-[32px]">
                    0{currentSlide === items.length - 1 ? 1 : currentSlide + 2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
