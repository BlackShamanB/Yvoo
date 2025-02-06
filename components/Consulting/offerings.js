function Offerings() {
  return (
    <div className="grid grid-cols-1 2xl:grid-cols-3 w-full bg-black">
      <div className="px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] py-[98px] md:py-[135px] 2xl:py-[190px] md:pb-[65px] pb-[62px] w-full flex items-center">
        <h1 className="text-white font-inter font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] font-[800] leading-[34px] md:leading-[44px] 2xl:leading-[54px]"
        data-scroll
        data-scroll-speed="0.15">
          Our <br />
          Offerings
        </h1>
      </div>
      <div className="col-span-2 px-[20px] bg-[#06D7F9] flex md:ml-[24px] ml-[12px] 3xl:w-[calc(100%_-_72px)] md:w-[calc(100%_-_24px)] w-[calc(100%_-_12px)] 2xl:h-[356px] md:h-[285px] h-[200px]">
        <div className="ml-[9px] md:ml-[41px] 2xl:ml-[94px] 3xl:ml-[134px] pr-[60px] md:pr-[30px] 2xl:pr-[120px] 3xl:pr-[136px] mt-[40px] md:mt-[167px] 3xl:mt-[197px] flex flex-col gap-4"
        data-scroll
        data-scroll-speed="0.1">
          <h1 className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] text-black">
            Our offerings include a range of procurement consulting services
            designed to help businesses optimize their procurement operations
            and achieve sustainable success.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Offerings;
