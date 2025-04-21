function Hero() {
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  return (
    <div className="relative w-full md:px-[20px] px-[41px] customsm:px-[50px] 3xl:bg-bg_supplier_discovery_with_matchory md:bg-solutionBgmd bg-solutionBg bg-no-repeat md:bg-contain bg-[size:100%] md:bg-[position:0_0] bg-[position:0_0%] flex justify-center 3xl:pt-[120px] md:pt-[162px] pt-[80px] xl:pb-0 md:max-h-[1008px] min-h-[820px]">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative w-full">
        <h1
          className="3xl:max-w-[732px] 2xl:max-w-[530px] font-inter font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] flex-1 2xl:mb-[42px] md:mb-[26px] mb-[60px]"
          data-scroll
          data-scroll-speed="0.15"
        >
          <div className="text-primary 2xl:mb-[12px] md:mb-[61px] mb-[62px] 2xl:text-[24px] md:text-[50px] text-[40px] 2xl:leading-[30px] md:leading-[54px] leading-[44px]">
            360° Supplier Score
          </div>
          <div className="font-[700] text-[60px] leading-[68px]">
            Gain a 360° view of your suppliers’ readiness
          </div>
        </h1>
        <div
          className="font-[400] text-[14px] md:text-[24px] leading-[30px] 2xl:max-w-[748px] mb-[42px] flex flex-col 3xl:gap-[20px] 2xl:gap-[20px] md:gap-[20px] flex-1 basis-[500px]"
          data-scroll
          data-scroll-speed="0.1"
        >
          <p className="md:mb-[0] mb-[20px]">
            The YVOO ScanPro+ 360° Supplier Report provides a detailed and
            real-world evaluation of a supplier’s compliance, performance, and
            operational risks. It combines on-site evaluation audit data,
            AI-driven risk assessment, supplier compliance records, and
            benchmarking insights to deliver a comprehensive overview of the
            suppliers.
          </p>
        </div>
        <div
          className="text-black text-[16px] leading-[20px] font-[500] w-[max-content] p-[20px_64px] bg-blue rounded-[30px] uppercase"
          onClick={handleModal}
        >
          Book a demo
        </div>
      </div>
    </div>
  );
}

export default Hero;
