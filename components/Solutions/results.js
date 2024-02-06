import Image from "next/image";

function Results({ handleModal }) {
  return (
    <div className="relative grid w-full inset-0 bg-[#131D2A] -mt-[1px] 3xl:pt-[129px]">
      <Image
        src="/icons/squares-2.png"
        width={96}
        height={106}
        alt="triangle"
        className="absolute 2xl:top-[15%] top-[83px] 3xl:left-[21.5%] 2xl:left-[39.4%] md:left-[65.6%] mouse-parallax md:block hidden"
        data-scroll
        data-scroll-speed="-0.15"
      />
      <Image
        src="/icons/icon-line.svg"
        width={584}
        height={106}
        alt="triangle"
        className="absolute 2xl:top-[65%] 2xl:top-[53%] md:top-[39.5%] top-[23.9%] 3xl:left-[-6.5%] md:left-[-78%] left-[57%] mouse-parallax z-[1]"
      />
      <Image
        src="/icons/arch-1.png"
        width={285}
        height={290}
        alt="triangle"
        className="absolute 2xl:top-[85%] md:top-[96.4%] top-[98.3%] 3xl:left-[76.3%] 2xl:left-[36.6%] md:left-[52.6%] left-[53%] mouse-parallax md:max-w-[247px] max-w-[127px] z-[1]"
        priority
        data-scroll data-scroll-speed="0.5"
      />
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="px-[20px] customxs:px-[50px] 3xl:px-[12px] w-full">
          <Image
            // style={{ zIndex: 0, transform: "translateZ(10px)" }}
            src="/images/man3xl.webp"
            width={592}
            height={476}
            alt="yvoo-search"
            className="2xl:bottom-[-149px] bottom-[-40px] z-10 3xl:max-w-[592px] 2xl:max-w-[666px] md:max-w-[622px] max-w-[319px] 3xl:w-[592px] 2xl:w-[666px] md:w-[622px] 2xl:right-[unset] md:right-[-85px] float-right"
          />
        </div>
        <div className="3xl:pl-[84px] 2xl:pl-[54px] w-full bg-[#131D2A]">
          <div className="my-[70px] md:my-[37px] flex flex-col">
            <h1 className="text-[#06D7F9] font-machina font-[800] uppercase text-[50px] 2xl:text-[50px] leading-[30px] 2xl:leading-[54px] max-w-full sm:max-w-[600px] md:max-w-[308px] 2xl:max-w-[650px]">
              Results that speak for themselves
            </h1>
            <h1 className="font-[700] text-[24px] leading-[30px] text-white mt-[31px]">
              Don't settle for outdated practices. Embrace the future of
              sourcing with YVOO SourcerPro+
            </h1>
            <p className="text-white font-[400] text-[16px] leading-[16px] mt-[26px]">
              Book a demo now and unlock the full potential of your procurement
              process.
            </p>
            <button className="white_btn mt-[43px]" onClick={handleModal}>
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
