import Image from "next/image";
import Link from "next/link";
import MagnifyOnScroll from "../MagnifyOnScroll";

function Search({ handleModal }) {
  return (
    <div
      id="search"
      className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-mint"
    >
      {/* <div className="bg-searchBgsm xs:bg-searchBgmd md:bg-searchBg2xl 2xl:bg-searchBg bg-no-repeat bg-local bg-contain bg-bottom absolute -bottom-[1px] inset-0 z-20"></div> */}

      <Image
        src="/icons/arch-1.png"
        width={180}
        height={170}
        alt="triangle"
        className="2xl:block hidden absolute 3xl:top-[-6%] 2xl:top-[-24%] top-[0] 3xl:left-[61.5%] 2xl:left-[59%] left-[0%] mouse-parallax md:max-w-[180px] max-w-[127px] z-[1]"
        priority
        data-scroll data-scroll-speed="0.5"
      />
      <div className="relative customxs:px-[50px] py-[55px] md:py-0 h-fit md:flex-center flex-col md:h-[810px] 2xl:h-[857px] 3xl:h-[870px]">
        <div className="flex px-[41px] 2xl:px-[0] flex-wrap md:flex-nowrap md:flex-col gap-[24px] md2:ml-[92px] 2xl:ml-[112px] 3xl:ml-[152px] 2xl:mt-[157px] 3xl:mt-[210px] md:mb-[568px]">
          <MagnifyOnScroll
            style={{}}
            src="/images/discover.webp"
            width={898}
            height={654}
            alt="yvoo-search"
            classes="absolute 3xl:top-[-355px] 2xl:top-[-27.8%] md:top-[-186px] top-[-50%] 3xl:right-[-294px] 2xl:right-[-30%] right-[0] md:left-[unset] left-[12px] 3xl:max-w-[898px] 2xl:max-w-[660px] max-w-[336px]"
            data-scroll
            data-scroll-speed="0.1"
          />
          <h1 className="uppercase font-machina text-black font-[800] text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] z-[1]" data-scroll
            data-scroll-speed="0.1">
            Plant
            <br /> Engineering
            <br /> for Renewable
            <br /> Hydrogen
            <br /> Production
          </h1>
          <Image
            src="/icons/crosses-1.svg"
            width={101}
            height={113}
            alt="triangle"
            className="3xl:block 2xl:hidden absolute 3xl:top-[52%] 2xl:top-[61%] top-[61%] 3xl:left-[10%] md:left-[76%] left-[76%] mouse-parallax md:max-w-[101px] max-w-[63px]"
            priority
            data-scroll data-scroll-speed="0.15"
          />
        </div>
      </div>
      <div className="relative px-[41px] md:px-[50px] py-[55px] 2xl:pt-[0] pt-[8px] pb-[8px] md:flex-center flex-col h-[743px] 2xl:h-[857px] 3xl:h-[870px]">
        <div className="mb-[140px] md:mb-0 2xl:ml-[5px] 3xl:ml-[35px] 2xl:mt-[169px] 3xl:mt-[223px] max-w-[503px] 3xl:max-w-[672px] flex flex-col 2xl:gap-[20px] gap-[16px] font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px] text-black">
          <p className="font-[700] 2xl:!text-[24px] md:!text-[20px] !text-[16px] 2xl:!leading-[30px] !md:leading-[26px] !leading-[20px] 3xl:mb-[0] 2xl:mb-[4px] mb-[0]"
            data-scroll
            data-scroll-speed="0.15">
            Maximize success and minimize risk
          </p>
          <p className="2xl:mb-[0] mb-[4px]"
            data-scroll
            data-scroll-speed="0.14">
            When building a renewable hydrogen production plant, it is crucial
            to make fast and smart decisions, especially when it comes to
            selecting reliable suppliers. Low-quality supplier data can lead to
            incomplete and misleading construction status reports, budget
            overruns, delays, and quality assurance problems, jeopardizing the
            success of the project.
          </p>
          <p className="2xl:mb-[0] mb-[4px]"
            data-scroll
            data-scroll-speed="0.13">
            At YVOO, we have a deep understanding of the potential and
            engineering challenges of hydrogen projects. With our team's
            extensive experience in solving complex problems in the power and
            industrial sectors, we can provide a 360-degree view of potential
            suppliers, ensuring that your company obtains accurate, dynamic, and
            enriched supplier data.
          </p>
          <p
            data-scroll
            data-scroll-speed="0.12">
            Ensure that you are supported by proven experts in transitioning
            towards lower-carbon sources of energy
          </p>
          <button
            className="filled_btn 3xl:mt-[30px] 2xl:mt-[27px] mt-[7px] md:!p-[18px_62px] p-[8px_30px] !border-2 !w-[max-content] btn_animated_black"
            onClick={handleModal}
            data-scroll
            data-scroll-speed="0.11"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
