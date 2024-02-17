import Image from "next/image";

function ExceptionalValue() {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 w-full bg-white">
      <div className="relative pl-[41px] md:pl-[85px] 2xl:pl-[162px] 3xl:pl-[202px] 2xl:pb-[45px] w-full bg-white flex items-center">
        <Image
          src="/icons/arch-2.png"
          width={316}
          height={275}
          alt="exceptional"
          className="absolute 3xl:top-[77%] 2xl:top-[84%] md:top-[132%] top-[178%] 3xl:left-[102%] 2xl:left-[97.5%] md:left-[55%] left-[50%] mouse-parallax 3xl:max-w-[316px] 2xl:max-w-[316px] md:max-w-[230px] max-w-[147px] z-[1]"
        
          data-scroll
          data-scroll-speed="0.15"/>
        <Image
          src="/images/consulting.webp"
          width={747}
          height={815}
          alt="yvoo-sales"
          className="relative top-[-40px] md:top-[-60px] 2xl:top-[-133px] 3xl:top-[-131px] 3xl:max-w-[747px] 2xl:max-w-[546px] md:max-w-[598px] max-w-[278px] 3xl:max-h-[815px] 2xl:max-h-[596px] md:max-h-[653px] max-h-[303px]"

          data-scroll
          data-scroll-speed="-0.1"
        />
      </div>
      <div className="px-[20px] w-full bg-white flex">
        <div className="ml-[21px] md:ml-[65px] 2xl:ml-[35px] 3xl:ml-[65px] my-[18px] md:mt-[-4px] 2xl:mt-[174px] 3xl:mt-[231px] mb-[100px] md:mb-[120px] 2xl:mb-[182px] 3xl:mb-[231px] flex flex-col 2xl:gap-[31px] md:gap-[21px] gap-[18px]">
          <h1 className="break-all text-[#06D7F9] font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px]"
        data-scroll
        data-scroll-speed="0.14">
            Exceptional <br />
            Value
          </h1>
          <h1 className="font-[700] 3xl:pr-[0] 2xl:pr-[150px] md:pr-[65px] pr-[21px] 2xl:max-w-[673px] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] text-black"
        data-scroll
        data-scroll-speed="0.2">
            Our offerings include a range of procurement consulting services
            designed to help businesses optimize their procurement operations
            and achieve sustainable success.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ExceptionalValue;
