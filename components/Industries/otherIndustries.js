import Image from "next/image";

function OtherIndustries() {
  return (
    <div className="relative z-40 w-full flex-between flex-wrap 2xl:flex-nowrap gap-[80px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[64px] md:py-[88px] bg-[#FF490F]">
      <Image
        src="/icons/industries-icon.svg"
        width={320}
        height={462}
        alt="industries"
        className="hidden md:block absolute -top-[200px] right-[1%]"
      />
      <p className="font-machina font-[800] text-[24px] leading-[24px] md:text-[32px] md:leading-[32px]">
        And many other industries
      </p>
    </div>
  );
}

export default OtherIndustries;
