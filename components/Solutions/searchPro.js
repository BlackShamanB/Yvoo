import Image from "next/image";

function SearchPro() {
  return (
    <div
      id="searchpro"
      className="w-full flex justify-between flex-wrap md:gap-[32px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[64px] md:py-[82px] 2xl:py-[104px] bg-mint"
    >
      <div className="relative w-full max-w-[746px] h-[652px] mt-[34px] md:mt-none">
        <Image
          src="/images/mobile_phone.png"
          alt="mobile"
          // fill
          width={746}
          height={797}
          className="object-contain"
        />
      </div>
      <div className="[&>*]:text-black w-full md:max-w-[530px] 2xl:max-w-[735px]">
        <h1 className="mb-6 max-w-[514px] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
          YVOO <b className="text-white">Search</b>
          Pro+
        </h1>
        <h2 className="mb-8 max-w-[298px] font-[700] text-[28px] leading-[24px]">
          Discover Quality Suppliers Effortlessly with
        </h2>
        <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
          In today's fast-paced business world, finding reliable suppliers can
          be a daunting and time-consuming task. Manual searches and
          communication with suppliers worldwide often result in wasted
          resources and unsuitable options. However, there is a better way to
          streamline this process.
        </p>
        <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-14">
          Introducing YVOO SearchPro+, the AI-powered platform designed to
          revolutionize supplier sourcing. Say goodbye to the hassle and
          uncertainty of traditional methods and embrace a more efficient and
          effective solution. Here's why you should book a demo today:
        </p>
        <h2 className="mb-8 font-[700] text-[24px] leading-[28px]">
          Uncover Global Suppliers in Seconds:
        </h2>
        <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px]">
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
