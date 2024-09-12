import Image from "next/image";

function SearchPro() {
  return (
    <div
      id="searchpro"
      className="w-full flex justify-between flex-wrap 3xl:gap-[32px] gap-[0] px-[41px] md:px-[85px] 2xl:px-[48px] 3xl:px-[202px] bg-mint"
    >
      <div className="relative w-full 3xl:max-w-[746px] 2xl:max-w-[746px] 3xl:h-[797px]" data-scroll data-scroll-speed="0.1">
        <Image
          src="/images/mobile_phone.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="relative object-contain 3xl:mt-[113px] 3xl:block 2xl:hidden hidden"
        />
        <Image
          src="/images/phone_2xl.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="relative object-contain 3xl:hidden 2xl:block hidden top-[150px]"
        />
        <div className="absolute w-275px text-[16px] leading-[20px] font-[500] py-[20px] pl-[30px] pr-[26px] bg-[#000] 3xl:top-[241px] 2xl:top-[279px] 3xl:right-[1px] 2xl:right-[63px] uppercase rounded-t-[30px] rounded-r-[30px] 2xl:block hidden">
          watch instructions
          <Image
            src="/icons/watch-triangle.svg"
            alt="mobile"
            // fill
            width={18}
            height={18}
            className="object-contain inline-block ml-[18px]"
          />
        </div>
      </div>
      <div className="[&>*]:text-black w-full 3xl:max-w-[735px] 2xl:max-w-[598px] md:max-w-[unset] 3xl:pt-[100px] 2xl:pt-[94px] pt-[100px] 3xl:pl-[63px] 3xl:pr-[0] 2xl:pr-[114px]" data-scroll data-scroll-speed="0.125">
        <h1 className="2xl:mb-[24px] md:mb-[16px] mb-[12px] max-w-[514px] font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[50px] 3xl:ml-[0] 2xl:ml-[-19px]">
          YVOO <br></br><b className="text-white font-[800]">Search</b>
          Pro+
        </h1>
        <h2 className="2xl:mb-6 md:mb-[16px] mb-[20px] max-w-[317px] font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] 3xl:ml-[0] 2xl:ml-[-19px]">
          Discover Quality Suppliers Effortlessly with
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px] mb-[20px] 3xl:ml-[0] 2xl:ml-[-19px]">
          In today's fast-paced business world, finding reliable suppliers can
          be a daunting and time-consuming task. Manual searches and
          communication with suppliers worldwide often result in wasted
          resources and unsuitable options. However, there is a better way to
          streamline this process.
        </p>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px] 2xl:mb-[42px] md:mb-[30px] mb-[20px] 3xl:ml-[0] 2xl:ml-[-19px]">
          Introducing YVOO SearchPro+, the AI-powered platform designed to
          revolutionize supplier sourcing. Say goodbye to the hassle and
          uncertainty of traditional methods and embrace a more efficient and
          effective solution. Here's why you should book a demo today:
        </p>
        <h2 className="2xl:mb-[25px] mb-[16px] font-[500] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] 3xl:ml-[0] 2xl:ml-[-19px]">
          Uncover Global Suppliers in Seconds:
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px] 3xl:ml-[0] 2xl:ml-[-19px] 2xl:mb-[0] md:mb-[110px] mb-[92px] md:pr-[0] pr-[13px]">
          With YVOO SearchPro+, you can tap into the entire global economy at
          the click of a button. Our advanced technology rapidly scans countless
          suppliers worldwide, providing you with an extensive list of qualified
          options in a matter of seconds.
        </p>
      </div>
      <div className="relative w-full md:ml-[10px] md:min-w-[623px] min-w-[345px] 2xl:hidden block">
        <Image
          src="/images/phone_md.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="object-contain md:hidden block ml-[-17px]"
        />
        <Image
          src="/images/phone_md.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="object-contain 2xl:hidden md:block hidden"
        />
        <div className="absolute w-275px md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] md:py-[20px] py-[13px] md:pl-[30px] pl-[20px] md:pr-[26px] pr-[17px] bg-[#000] uppercase rounded-t-[30px] rounded-r-[30px] block md:top-[87px] top-[12px] md:left-[325px] left-[107px]">
          watch instructions
          <Image
            src="/icons/watch-triangle.svg"
            alt="mobile"
            // fill
            width={18}
            height={18}
            className="object-contain inline-block md:ml-[18px] ml-[13px] md:w-[unset] md:h-[unset] w-[12px] h-[18px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPro;
