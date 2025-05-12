import Image from "next/image";

function SearchPro() {
  return (
    <div
      id="searchpro"
      className="w-full flex flex-nowrap justify-between flex-wrap 3xl:gap-[32px] gap-[0] px-[41px] md:px-[85px] 2xl:px-[48px] 3xl:px-[106px] py-[180px] bg-mint"
    >
      <div
        className="relative w-full 3xl:min-w-[842px]"
        data-scroll
        data-scroll-speed="0.1"
      >
        <Image
          src="/images/solution_search.png"
          alt="mobile"
          // fill
          width={842}
          height={453}
          className="relative object-contain 3xl:block 2xl:hidden hidden"
        />
        <Image
          src="/images/phone_2xl.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="relative object-contain 3xl:hidden 2xl:block hidden top-[150px]"
        />
      </div>
      <div
        className="[&>*]:text-black w-full 3xl:pl-[63px] 3xl:pr-[96px] 2xl:pr-[0]"
        data-scroll
        data-scroll-speed="0.125"
      >
        <h1 className="2xl:mb-[42px] md:mb-[16px] mb-[12px] max-w-[514px] font-inter font-[700] text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[58px] 3xl:ml-[0] 2xl:ml-[-19px]">
          Matchory & YVOO <br></br>
          <b className="text-white font-[700]">Scan</b>
          Pro+
        </h1>
        <h2 className="2xl:mb-[24px] md:mb-[16px] mb-[20px] font-[700] 2xl:text-[30px] md:text-[20px] text-[16px] 2xl:leading-[38px] md:leading-[26px] leading-[20px] 3xl:ml-[0] 2xl:ml-[-19px]">
          AI-Powered Supplier Discovery & Validation
        </h2>
        <p className="font-[400] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] mb-[42px] 3xl:ml-[0] 2xl:ml-[-19px]">
          Finding and verifying reliable suppliers is time-consuming and
          inefficient with manual searches. <br />
          Matchory + YVOO ScanPro+ streamline sourcing with AI-driven supplier
          discovery and on-site verification, ensuring compliance and risk-free
          onboarding.
        </p>
        <h2 className="2xl:mb-[24px] mb-[16px] font-[700] 2xl:text-[30px] md:text-[20px] text-[16px] 2xl:leading-[38px] md:leading-[26px] leading-[20px] 3xl:ml-[0] 2xl:ml-[-19px]">
          Discover globally Suppliers in Minutes{" "}
        </h2>
        <p className="font-[400] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] 3xl:ml-[0] 2xl:ml-[-19px] md:pr-[0] pr-[13px]">
          Matchory + YVOO ScanPro+ instantly scan millions of suppliers,
          delivering curated matches with on-site validation, reducing risk and
          accelerating procurement.
        </p>
      </div>
      <div className="relative w-full md:min-w-[623px] min-w-[unset] 2xl:hidden block">
        <Image
          src="/images/phone_xs.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="object-contain md:hidden block"
        />
        <Image
          src="/images/phone_md.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="object-contain 2xl:hidden md:block hidden"
        />
      </div>
    </div>
  );
}

export default SearchPro;
