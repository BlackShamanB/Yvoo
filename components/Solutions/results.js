import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ImgLeftToRight from "../ImgLeftToRight";

function Results({ handleModal }) {
  return (
    <div className="relative grid w-full inset-0 bg-[#131D2A] -mt-[1px] 2xl:pt-[180px] md:bg-solutionTwoBgMd bg-solutionTwoBg bg-no-repeat bg-right-top">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 2xl:grid-cols-2 w-full">
        <div
          className="px-[20px] md:px-[61px] 2xl:px-[50px] 3xl:px-[12px] md:pt-[0] pt-[83px] 2xl:mb-[0] md:mb-[37px] mb-[0] w-full"
          data-scroll
          data-scroll-speed="0.5"
        >
          <MagnifyOnScroll
            src="/images/man3xl-1.webp"
            width={592}
            height={476}
            alt="yvoo-search"
            classes="relative md:left-[0] left-[21px] z-10 3xl:max-w-[592px] 2xl:max-w-[432px] md:max-w-[415px] max-w-[250px] 3xl:w-[592px] 2xl:w-[666px] md:w-[415px] [&>div>img]:3xl:h-[476px] [&>div>img]:2xl:h-[auto] [&>div>img]:md:h-[unset] [&>div>img]:h-[201px] 2xl:float-right z-[0]"
          />
        </div>
        <div
          className="3xl:pl-[84px] 2xl:pl-[54px] w-full"
          data-scroll
          data-scroll-speed="0.2"
        >
          <div className="3xl:mt-[192px] 2xl:mt-[167px] md:pt-[0] pt-[60px] md:pr-[0] md:px-[0] px-[41px] flex flex-col">
            <h1 className="text-[#06D7F9] font-inter font-[700] md:text-[40px] text-[26px] md:leading-[48px] leading-[34px] max-w-full md:max-w-[unset] 2xl:max-w-[650px]">
              Results that speak
              <br /> for themselves
            </h1>
            <h1 className="font-[400] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px] text-white 2xl:mt-[24px] md:mt-[21px] mt-[16px]">
              Don't settle for outdated sourcing methods.{" "}
              <span className="font-[700]">
                Embrace AI&#8209;driven supplier discovery
              </span>{" "}
              with <span className="font-[700]">Matchory & YVOO</span> to find
              and evaluate the best suppliers with speed, accuracy, and
              transparency.
            </h1>
            <p className="text-white font-[500] md:text-[16px] text-[14px] leading-[20px] 2xl:mt-[24px] mt-[16px] md:mb-[42px] mb-[32px]">
              Book a demo now and unlock the full potential of your procurement
              process.
            </p>
            <button
              className="rounded-[30px] blue_btn btn_animated_blue md:mt-[42px] mt-[0px] !max-w-[max-content] md:!p-[18px_62px] !p-[14px_32px] !h-[auto]"
              onClick={handleModal}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
