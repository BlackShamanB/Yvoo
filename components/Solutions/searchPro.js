import Image from "next/image";

function SearchPro() {
  return (
    <div
      id="searchpro"
      className="w-full flex justify-between flex-wrap 3xl:gap-[32px] gap-[0] px-[20px] md:px-[50px] 2xl:px-[48px] 3xl:px-[202px] py-[64px] md:py-[82px] 2xl:py-[0] 3xl:py-[18px] bg-mint"
    >
      <div className="relative w-full 3xl:max-w-[726px] 2xl:max-w-[746px] 3xl:h-[728px] 3xl:mt-[34px] md:mt-none">
        <Image
          src="/images/mobile_phone.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="object-contain 3xl:block 2xl:hidden block"
        />
        <Image
          src="/images/phone_2xl.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="object-contain 3xl:hidden 2xl:block hidden"
        />
        <div className="absolute w-275px text-[16px] leading-[20px] font-[500] py-[20px] pl-[30px] pr-[26px] bg-[#000] 3xl:top-[88px] 2xl:top-[137px] 3xl:right-[-20px] 2xl:right-[63px] uppercase rounded-t-[30px] rounded-r-[30px]">
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
      <div className="[&>*]:text-black w-full md:max-w-[530px] 3xl:max-w-[735px] 2xl:max-w-[598px] 3xl:pt-[79px] 2xl:pt-[94px] 3xl:pl-[63px] 3xl:pr-[0] 2xl:pr-[114px]">
        <h1 className="mb-[30px] max-w-[514px] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px] 3xl:ml-[0] ml-[-19px]">
          YVOO <b className="text-white">Search</b>
          Pro+
        </h1>
        <h2 className="mb-6 max-w-[317px] font-[700] text-[24px] leading-[30px] 3xl:ml-[0] ml-[-19px]">
          Discover Quality Suppliers Effortlessly with
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-[20px] 3xl:ml-[0] ml-[-19px]">
          In today's fast-paced business world, finding reliable suppliers can
          be a daunting and time-consuming task. Manual searches and
          communication with suppliers worldwide often result in wasted
          resources and unsuitable options. However, there is a better way to
          streamline this process.
        </p>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-[42px] 3xl:ml-[0] ml-[-19px]">
          Introducing YVOO SearchPro+, the AI-powered platform designed to
          revolutionize supplier sourcing. Say goodbye to the hassle and
          uncertainty of traditional methods and embrace a more efficient and
          effective solution. Here's why you should book a demo today:
        </p>
        <h2 className="mb-[25px] font-[500] text-[24px] leading-[30px] 3xl:ml-[0] ml-[-19px]">
          Uncover Global Suppliers in Seconds:
        </h2>
        <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[19px] 3xl:ml-[0] ml-[-19px]">
          With YVOO SearchPro+, you can tap into the entire global economy at
          the click of a button. Our advanced technology rapidly scans countless
          suppliers worldwide, providing you with an extensive list of qualified
          options in a matter of seconds.
        </p>
      </div>
    </div>
  );
}

export default SearchPro;
