import React, { useState, useEffect } from "react";
import Image from "next/image";
                 
const Slider = ({ slides, currentSlide, setCurrentSlide }) => {
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      setNextIndex((currentSlide + 1) % slides.length);
    }
  }, [currentSlide, isAnimating, slides.length]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`new-slide slide ${
            currentSlide != index ? "slide-hidden" : "slide-active"
          } ${isAnimating && currentSlide == index ? "animating" : ""}`}
        >
          {slide}
        </div>
      ))}

      <div className="absolute bottom-[0] right-[0] md:left-[unset] left-[1px] flex flex-row gap-[60px] md2:justify-end justify-center">
        <div className="button-prev" onClick={goToPrevious}>
          <div className="flex items-center">
            <div className="text-white md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] 2md:font-[700] font-[600] ml-2 min-w-[32px] w-[32px]">
              0{currentSlide === 0 ? slides.length : currentSlide}
            </div>
            <Image
              src="/icons/map_arrow.svg"
              width={71}
              height={18}
              alt="prev"
              className="cursor-pointer rotate-[180deg] md2:max-w-[unset] max-w-[58px] md2:ml-[31px] hover:mr-[3px] hover:md2:ml-[28px] ml-[21px] hover:ml-[18px] transition-all duration-300"
            />
          </div>
        </div>
        <div className="button-next" onClick={goToNext}>
          <div className="flex items-center">
            <Image
              src="/icons/map_arrow.svg"
              width={71}
              height={18}
              alt="next"
              className="cursor-pointer md2:max-w-[unset] max-w-[58px] md2:mr-[31px] hover:ml-[3px] hover:md2:mr-[28px] mr-[21px] hover:mr-[18px] transition-all duration-300"
            />
            <div className="text-white md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] 2md:font-[700] font-[600] mr-2 min-w-[32px] w-[32px]">
              0{currentSlide === slides.length - 1 ? 1 : currentSlide + 2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
