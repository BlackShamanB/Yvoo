import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ImgLeftToRight from "../ImgLeftToRight"

function Results({ handleModal }) {
  return (
    <div className="relative grid w-full inset-0 bg-[#131D2A] -mt-[1px] 3xl:pt-[138px]">
      <Image
        src="/icons/squares-2.png"
        width={96}
        height={106}
        alt="triangle"
        className="absolute 3xl:top-[15%] 2xl:top-[10%] md:top-[32px] top-[-32px] 3xl:left-[21.5%] 2xl:left-[20.4%] md:left-[22.4%] left-[23.2%] md:max-w-[unset] max-w-[44px] mouse-parallax z-[1]"
        data-scroll
        data-scroll-speed="0.15"
      />
      <ImgLeftToRight
        src="/icons/icon-line.svg"
        width={584}
        height={106}
        alt="triangle"
        classesImg="md:max-w-[584px] max-w-[360px] md:min-h-[206px] min-h-[127px]"
        classesContainer="absolute overflow-hidden 3xl:top-[65%] 3xl:top-[53%] 2xl:top-[48%] md:top-[37.5%] top-[18%] 3xl:left-[-6.5%] 2xl:left-[-15%] md:left-[-45%] left-[-62%] z-[1]"
        data-scroll
        data-scroll-speed="0.1"
      />
      <Image
        src="/icons/arch-1.png"
        width={285}
        height={290}
        alt="triangle"
        className="absolute 3xl:top-[85%] 2xl:top-[78%] md:top-[98.3%] top-[95.3%] 2xl:left-[76.3%] md:left-[65.6%] left-[65%] mouse-parallax 3xl:max-w-[247px] 2xl:max-w-[180px] md:max-w-[178px] max-w-[97px] z-[1]"
        
        data-scroll data-scroll-speed="0.5"
      />
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 2xl:grid-cols-2 w-full">
        <div className="px-[20px] md:px-[61px] 2xl:px-[50px] 3xl:px-[12px] 2xl:pt-[0] md:pt-[101px] 2xl:mb-[0] md:mb-[37px] mb-[0] w-full" data-scroll data-scroll-speed="0.5">
          <MagnifyOnScroll
            // style={{ zIndex: 0, transform: "translateZ(10px)" }}
            src="/images/man3xl-1.webp"
            width={592}
            height={476}
            alt="yvoo-search"
            classes="relative md:ml-[0] ml-[49px] 3xl:top-[0px] 2xl:top-[130px] md:top-[0] top-[-25px] 3xl:left-[0] 2xl:left-[38px] md:left-[unset] left-[49px] z-10 3xl:max-w-[592px] 2xl:max-w-[432px] md:max-w-[415px] max-w-[250px] 3xl:w-[592px] 2xl:w-[666px] md:w-[415px] [&>div>img]:3xl:h-[476px] [&>div>img]:2xl:h-[auto] [&>div>img]:md:h-[unset] [&>div>img]:h-[201px] 2xl:float-right z-[0]"
          />
        </div>
        <div className="3xl:pl-[84px] 2xl:pl-[54px] w-full bg-[#131D2A]" data-scroll data-scroll-speed="0.2">
          <div className="3xl:mt-[44px] 3xl:mb-[37px] 2xl:mt-[167px] 2xl:mb-[81px] 2xl:pt-[0] md:pt-[58px] pt-[36px] md:pr-[0] md:px-[0] px-[41px] flex flex-col">
            <h1 className="text-[#06D7F9] font-machina font-[800] uppercase 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] max-w-full md:max-w-[unset] 2xl:max-w-[650px]">
              Results that speak for themselves
            </h1>
            <h1 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] text-white 2xl:mt-[24px] md:mt-[21px] mt-[12px]">
              Don't settle for outdated practices. Embrace the future of
              sourcing with YVOO SourcerPro+
            </h1>
            <p className="text-white font-[400] md:text-[16px] text-[14px] leading-[20px] 2xl:mt-[24px] md:mt-[16px] mt-[12px]">
              Book a demo now and unlock the full potential of your procurement
              process.
            </p>
            <button className="white_btn btn_animated_white 2xl:mt-[42px] md:mt-[28px] mt-[24px] max-w-[159px]" onClick={handleModal}>
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
