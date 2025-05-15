import Image from "next/image";
import Link from "next/link";
import MagnifyOnScroll from "../MagnifyOnScroll";

function Search({ handleModal }) {
  return (
    <div
      id="search"
      className="relative md:pt-[288px] pt-[145px] md:pb-[240px] pb-[140px] md:px-[202px] px-[12px] bg-mint"
    >
      <div className="relative">
        <MagnifyOnScroll
          style={{}}
          src="/images/discovermd.webp"
          width={746}
          height={543}
          alt="yvoo-search"
          classes="absolute 2xl:left-[154px] 2xl:top-[-714px] top-[-285px] 3xl:max-w-[898px] 2xl:max-w-[660px] max-w-[336px]"
          data-scroll
          data-scroll-speed="0.1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full 2xl:gap-[171px] gap-[60px] md:px-[0] px-[29px]">
        <div className="relative h-fit md:flex-center flex-col">
          <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-[24px]">
            <h1
              className="font-inter text-black font-[700] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[58px] md:leading-[44px] leading-[34px] z-[1]"
              data-scroll
              data-scroll-speed="0.1"
            >
              Plant Engineering for Renewable Hydrogen
              <br /> Production
            </h1>
            <Image
              src="/icons/crosses-1.svg"
              width={101}
              height={113}
              alt="triangle"
              className="3xl:block 2xl:hidden absolute 3xl:top-[94%] 2xl:top-[61%] top-[83%] 3xl:left-[-16%] md:left-[76%] left-[83%] mouse-parallax md:max-w-[101px] max-w-[63px]"
              data-scroll
              data-scroll-speed="0.15"
            />
          </div>
        </div>
        <div className="relative md:flex-center flex-col">
          <div className="md:pt-[5px] max-w-[503px] 3xl:max-w-[672px] flex flex-col 2xl:gap-[20px] gap-[16px] font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px] text-black">
            <p
              className="font-[700] 2xl:!text-[24px] md:!text-[20px] !text-[18px] 2xl:!leading-[30px] !leading-[26px] 2xl:mb-[4px] mb-[0]"
              data-scroll
              data-scroll-speed="0.15"
            >
              Maximize success and minimize risk
            </p>
            <p
              className="2xl:mb-[0] mb-[4px]"
              data-scroll
              data-scroll-speed="0.15"
            >
              When building a renewable hydrogen production plant, it is crucial
              to make fast and smart decisions, especially when it comes to
              selecting reliable suppliers. Low-quality supplier data can lead
              to incomplete and misleading construction status reports, budget
              overruns, delays, and quality assurance problems, jeopardizing the
              success of the project.
            </p>
            <p
              className="2xl:mb-[0] mb-[4px]"
              data-scroll
              data-scroll-speed="0.15"
            >
              At YVOO, we have a deep understanding of the potential and
              engineering challenges of hydrogen projects. With our team's
              extensive experience in solving complex problems in the power and
              industrial sectors, we can provide a 360-degree view of potential
              suppliers, ensuring that your company obtains accurate, dynamic,
              and enriched supplier data.
            </p>
            <p data-scroll data-scroll-speed="0.15">
              Ensure that you are supported by proven experts in transitioning
              towards lower-carbon sources of energy
            </p>
            <button
              className="rounded-[30px] !border-white !text-white !hover:text-black filled_btn btn_animated_white 3xl:mt-[28px] 2xl:mt-[27px] mt-[16px] md:!p-[18px_62px] p-[14px_32px] !border-2 !w-[max-content] !h-[max-content]"
              onClick={handleModal}
              data-scroll
              data-scroll-speed="0.15"
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
