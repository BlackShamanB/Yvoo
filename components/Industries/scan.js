import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";

function Scan({ handleModal }) {
  return (
    <div
      id="scan"
      className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-[#06D7F9]"
    >
      {/* <Image
        src="/icons/greenTriangle.png"
        width={146}
        height={166}
        alt="triangle"
        className="hidden md:block absolute -top-[54px] md2:left-[18%] 2xl:left-[20%]"
      /> */}
      <div className="px-[0px] md:px-[50px] md:py-[55px] md:py-0 md:flex-center flex-col">
        <div className="flex flex-col justify-center md:items-end md:flex-nowrap md:flex-col gap-[24px] 2xl:ml-[182px] md:mt-[128px] md2:mr-[36px]">
          <MagnifyOnScroll
            src="/images/industriesManufacturing.webp"
            width={900}
            height={506}
            alt="yvoo-search"
            classes="relative 2xl:top-[-257px] top-[-40px] z-10 3xl:max-w-[900px] 2xl:max-w-[660px] md:max-w-[622px] max-w-[319px] 3xl:w-[900px] 2xl:w-[660px] md:w-[622px] 2xl:left-[62px] md:left-[-85px] left-[0]"
            data-scroll
            data-scroll-speed="0.15"
          />
          <Image
            src="/icons/about_line.svg"
            width={523}
            height={196}
            alt="triangle"
            className="2xl:block hidden absolute 3xl:top-[54%] 2xl:top-[40%] top-[19%] 3xl:left-[0%] 2xl:left-[-3%] left-[0%] z-[1] 3xl:max-w-[495px] 2xl:max-w-[523px] max-w-[221px] max-h-[196px]"
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          transform: "translateZ(-10px)",
          transformStyle: "preserve-3d",
        }}
        className="pl-[41px] md:pl-[50px] pr-[12px] md:pr-[50px] py-[16px] md:py-0 md:flex-center flex-col min-h-[773px] 2xl:min-h-[914px] 3xl:min-h-[854px]"
      >
        <div className="pb-[180px] mb-[140px] md:mb-0 md2:ml-[23px] md:mt-[180px] flex flex-col 3xl:gap-[24px] gap-[20px] text-black font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px] 3xl:max-w-[671px] max-w-[479px]">
          <h1
            className="break-all font-inter font-[700] text-black 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[58px] md:leading-[44px] leading-[34px]"
            data-scroll
            data-scroll-speed="0.18"
          >
            Manufacturing
          </h1>
          <div className="flex flex-col gap-[24px] 3xl:mb-[24px] 2xl:mb-[28px]">
            <p className="font-[700] text-[16px] text-black 2xl:text-[24px] md:text-[20px] text-[16px] leading-[20px] md:leading-[24px] 2xl:leading-[30px] max-w-[281px] md:max-w-[382px]"
            data-scroll
            data-scroll-speed="0.17">
              Cut your Supplier Evaluation Costs by up to 70%{" "}
            </p>
          </div>
          <p
            className="2xl:pr-[0] pr-[29px] mb-[-5px]"
            data-scroll
            data-scroll-speed="0.16"
          >
            Manufacturers face intense pressure from fluctuating order volumes,
            declining internal value creation capabilities, growing competition,
            and complex value creation structures. As a result, finding the
            right suppliers has become increasingly critical. However,
            traditional on-site supplier audits can be time-consuming and
            costly, especially with increasing fuel prices.
          </p>
          <p
            className="3xl:pr-[0] 2xl:pr-[5px] pr-[29px] 3xl:mb-[0] mb-[5px]"
            data-scroll
            data-scroll-speed="0.14"
          >
            YVOO offers a revolutionary solution for evaluating new suppliers.
            With our global network of agents, we can efficiently and swiftly
            evaluate multiple vendors, saving you valuable time and money. By
            outsourcing your supplier audits to our experienced team, you can be
            confident that you're making a wise, cost-effective, and time-saving
            decision.
          </p>
          <p
            className="font-[700] mt-[-5px] 3xl:pr-[0] pr-[10px]"
            data-scroll
            data-scroll-speed="0.12"
          >
            Lower your supplier evaluation costs, accelerate the number of
            audited suppliers, and reduce compliance risk
          </p>
          <button
            className="rounded-[30px] !border-white !text-white !hover:text-black filled_btn btn_animated_white 2xl:mt-[24px] mt-[6px] !border-[#000000] !border-[2px] md:!p-[18px_60px] !p-[8px_30px] !w-[max-content] text-nowrap btn_animated_black"
            onClick={handleModal}
            data-scroll
            data-scroll-speed="0.1"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Scan;
