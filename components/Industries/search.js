import Image from "next/image";
import Link from "next/link";

function Search({ handleModal }) {
  return (
    <div
      id="search"
      className="relative grid grid-cols-1 md:grid-cols-2 w-full"
    >
      <div className="bg-searchBgsm xs:bg-searchBgmd md:bg-searchBg2xl 2xl:bg-searchBg bg-no-repeat bg-local bg-contain bg-bottom absolute -bottom-[1px] inset-0 z-20"></div>
      <Image
        style={{ zIndex: 200 }}
        src="/icons/yvoo-search-icon.svg"
        alt="hero"
        width={223}
        height={134}
        alt="yvoo-search"
        className="hidden md:block absolute -top-[40px] right-[17%] 2xl:right-[19%] z-10"
      />
      <div className="relative px-[20px] customxs:px-[50px] bg-white py-[55px] md:py-0 h-fit md:flex-center flex-col md:h-[810px] 2xl:h-[898px]">
        <div className="flex flex-wrap md:flex-nowrap md:flex-col gap-[24px] md2:ml-[92px] 2xl:ml-[182px] md:mt-[128px] md:mb-[568px]">
          <h1 className="hidden md:block uppercase font-machina text-black font-[800] text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
            Plant
            <br /> Engineering
            <br /> for Renewable
            <br /> Hydrogen
            <br /> Production
          </h1>
          <h1 className="md:hidden uppercase max-w-[264px] customxs:max-w-[564px] font-machina text-black font-[800] text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
            Plant Engineering for Renewable Hydrogen Production
          </h1>
        </div>
      </div>
      <div className="relative px-[20px] customxs:px-[50px] bg-primaryOrange py-[55px] md:py-0 md:flex-center flex-col h-auto customxs:h-[698px] md:h-[810px] 2xl:h-[898px]">
        <div className="mb-[140px] md:mb-0 md2:ml-[44px] 2xl:ml-[52px] md:mt-[120px] max-w-[584px] flex flex-col gap-4 font-[400] leading-[19px] [&>p]:text-[14px] [&>p]:customxs:text-[16px]">
          <p className="font-[700] text-[18px] leading-[18px] md:text-[24px] md:leading-[24px]">
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
            className="filled_btn_white mt-[16px] z-50"
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
