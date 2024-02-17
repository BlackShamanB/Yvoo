import Image from "next/image";
import Link from "next/link";

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
        className="absolute 2xl:top-[790px] md:top-[96.4%] top-[98.3%] 3xl:left-[40%] 2xl:left-[36.6%] md:left-[52.6%] left-[53%] mouse-parallax md:max-w-[180px] max-w-[127px] z-[1]"
        priority
        data-scroll data-scroll-speed="0.5"
      />
      <div className="relative px-[20px] customxs:px-[50px] py-[55px] md:py-0 h-fit md:flex-center flex-col md:h-[810px] 2xl:h-[870px]">
        <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-[24px] md2:ml-[92px] 2xl:ml-[152px] md:mt-[210px] md:mb-[568px]">
          <Image
            style={{ }}
            src="/images/discover.webp"
            width={900}
            height={654}
            alt="yvoo-search"
            className="absolute 2xl:top-[-355px] md:top-[186px] top-[211px] 3xl:right-[-294px] 2xl:right-[-114px] md:right-[-61px] 3xl:max-w-[900px] 2xl:max-w-[774px] md:max-w-[659px] max-w-[89%]"

            // data-scroll
            // data-scroll-speed="-0.01"
          />
          <h1 className="uppercase font-machina text-black font-[800] text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] z-[1]">
            Plant
            <br /> Engineering
            <br /> for Renewable
            <br /> Hydrogen
            <br /> Production
          </h1>
        </div>
      </div>
      <div className="relative px-[20px] customxs:px-[50px] py-[55px] md:py-0 md:flex-center flex-col h-auto customxs:h-[698px] md:h-[810px] 2xl:h-[870px]">
        <div className="mb-[140px] md:mb-0 md2:ml-[44px] 2xl:ml-[35px] md:mt-[223px] max-w-[672px] flex flex-col gap-[20px] font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px] text-black">
          <p className="font-[700] 2xl:!text-[24px] md:!text-[20px] !text-[16px] 2xl:!leading-[30px] !md:leading-[26px] !leading-[20px]">
            Maximize success and minimize risk
          </p>
          <p>
            When building a renewable hydrogen production plant, it is crucial
            to make fast and smart decisions, especially when it comes to
            selecting reliable suppliers. Low-quality supplier data can lead to
            incomplete and misleading construction status reports, budget
            overruns, delays, and quality assurance problems, jeopardizing the
            success of the project.
          </p>
          <p>
            At YVOO, we have a deep understanding of the potential and
            engineering challenges of hydrogen projects. With our team's
            extensive experience in solving complex problems in the power and
            industrial sectors, we can provide a 360-degree view of potential
            suppliers, ensuring that your company obtains accurate, dynamic, and
            enriched supplier data.
          </p>
          <p>
            Ensure that you are supported by proven experts in transitioning
            towards lower-carbon sources of energy
          </p>
          <button
            className="filled_btn mt-[30px] 2xl:!p-[18px_62px] !w-[max-content]"
            onClick={handleModal}
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
