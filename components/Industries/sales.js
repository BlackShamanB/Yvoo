import Image from "next/image";
import Link from "next/link";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ImgLeftToRight from "../ImgLeftToRight"

function Sales({ handleModal }) {
  return (
    <div
      id="sales"
      className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-white bg-local bg-contain bg-no-repeat bg-bottom md:pt-[180px] pt-[100px] md:pb-[160px] pb-[80px]"
    >
      <div
        className="px-[41px] 2xl:px-[50px] bg-white md:flex-center flex-col h-fit"
      >
        <div className="flex flex-wrap md:flex-nowrap md:flex-col md:gap-[24px] gap-[16px] 2xl:ml-[112px] 3xl:ml-[152px] 3xl:max-w-[unset] max-w-[503px]">
          <h1 className="font-inter font-[700] text-black text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[58px]"
            data-scroll
            data-scroll-speed="0.18">
            Automotive Companies
          </h1>
          <div className="flex flex-col gap-[24px]">
            <p className="font-[700] text-black 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] leading-[26px] md:mb-[24px] mb-[22px]"
            data-scroll
            data-scroll-speed="0.16">
              Increase quality, innovation, and flexibility
            </p>
          </div>
          <div
            className="text-black 2xl:mb-[140px] md:mb-0 max-w-[673px] flex flex-col gap-[20px] font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px]"
            data-scroll
            data-scroll-speed="0.14"
          >
            <p
            data-scroll
            data-scroll-speed="0.12">
              Suppliers are key sources of innovation, and OEMs must choose their
              partners carefully to ensure differentiating products. Flexibility
              across the full supply chain is crucial to enable OEMs to respond to
              market fluctuations and changes in customer preferences.
            </p>
            <p
            data-scroll
            data-scroll-speed="0.1">
              At YVOO, we understand the importance of selecting the right
              suppliers to drive innovation and flexibility in the highly
              engineered products industry. Our supplier auditing process is fast,
              cost-effective, and enables you to evaluate new suppliers and
              establish a global network that meets your high standards for
              quality and performance. With our expertise, you can confidently
              navigate your industry's unique sourcing requirements and unlock
              tremendous opportunities for growth and success.
            </p>
            <p className="font-[700]"
            data-scroll
            data-scroll-speed="0.08">
              Future-proof your supply chain and ensure procurement excellence
            </p>
            <button className="md:block hidden rounded-[30px] !border-blue filled_btn 2xl:mt-[27px] mt-[4px] md:!p-[18px_62px] !p-[8px_30px] !w-[max-content] btn_animated_blue" onClick={handleModal}
            data-scroll
            data-scroll-speed="0.06">
              Apply now
            </button>
          </div>
        </div>
      </div>
      <div
        className="2xl:pl-[12px] h-auto md:pt-[93px] pt-[60px]"
      >
        <MagnifyOnScroll
          src="/images/automotiveCompanies.webp"
          width={948}
          height={613}
          alt="yvoo-search"
          classes="block relative z-10 3xl:max-w-[948px] 2xl:max-w-[708px] max-w-[319px] 3xl:w-[948px] 2xl:left-[0] md:left-[-85px] left-[0] 2xl:ml-[0] ml-[auto]"
          data-scroll
          data-scroll-speed="0.15"
        />

      </div>
    </div>
  );
}

export default Sales;
