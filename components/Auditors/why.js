import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";

function Why() {
  return (
    <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full 3xl:max-h-[875px] 2xl:max-h-[789px] z-[1]">
      <div className="relative flex pr-[41px] md:pr-[0] pl-[41px] md:pl-[85px] 2xl:pl-[162px] 3xl:pl-[202px] 3xl:pb-[583px] md:pt-[184px] pt-[100px] w-full bg-white 3xl:max-h-[875px] 2xl:max-h-[789px]">
        <h1
          className="w-full text-black font-inter font-[700] md:text-[50px] text-[30px] md:leading-[58px] leading-[34px] z-[1]"
          data-scroll
          data-scroll-speed="0.2"
        >
          Why Become <br />
          an YVOO Agent?
        </h1>
        <div
          className="absolute bg-mint 3xl:w-[592px] 2xl:w-[432px] md:w-[476px] w-[221px] 2xl:h-[721px] md:h-[600px] h-[382px] md:top-[-82px] top-[-40px] 2xl:right-[12px] md:right-[85px] right-[41px]"
          data-scroll
          data-scroll-speed="0.2"
        ></div>
      </div>
      <div className="2xl:px-[20px] 3xl:px-[50px] w-full bg-white 3xl:max-h-[875px] 2xl:max-h-[789px] md:max-h-[894px] md:min-h-[876px] md:pb-[0] pb-[11px]">
        <div className="md:ml-[92px] 2xl:ml-[42px] mt-[234px] md:mt-[184px] 2xl:max-w-[503px] 3xl:max-w-[660px] md:px-[0] px-[44px] flex flex-col gap-4">
          <ul
            className="text-black pl-[18px] list-disc list-outside md:text-[16px] text-[14px] md:leading-[30px] leading-[20px] font-[400]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <li className="md:mb-[0] mb-[10px]">
              Flexible hours that suit your lifestyle
            </li>
            <li className="md:mb-[0] mb-[10px]">
              Fast and reliable payment system
            </li>
            <li className="md:mb-[0] mb-[10px]">
              Transparent terms and conditions
            </li>
            <li className="md:mb-[0] mb-[10px]">
              No special requirements to meet - just your skills and dedication
            </li>
            <li className="md:mb-[0] mb-[10px]">
              Minimal training required - we provide the tools you need to
              succeed
            </li>
            <li className="md:mb-[0] mb-[10px]">
              Exposure to industry best practices
            </li>
            <li className="md:mb-[0] mb-[10px]">
              Collaborate with top industry names
            </li>
            <li className="md:mb-[0] mb-[10px]">
              Choose projects that align with your goals and interests
            </li>
          </ul>
        </div>
        <MagnifyOnScroll
          src="/images/forAuditors.png"
          alt="forAuditors"
          width={519}
          height={426}
          classes="block relative object-contain 3xl:top-[135px] 2xl:top-[75px] md:top-[10px] top-[50px] left-[41px] md:left-[85px] 2xl:left-[35px] 3xl:left-[36px] 2xl:max-w-[389px] 3xl:max-w-[max-content] md:max-w-[415px] max-w-[278px] 3xl:max-h-[unset] 2xl:max-h-[319px] md:max-h-[340px] max-h-[229px]"
          imgClasses="2xl:max-w-[389px] 3xl:max-w-[max-content] md:max-w-[415px] max-w-[278px] 3xl:max-h-[unset] 2xl:max-h-[319px] md:max-h-[340px] max-h-[229px]"
          data-scroll
          data-scroll-speed="0.15"
        />
      </div>
    </div>
  );
}

export default Why;
