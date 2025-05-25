function Hero() {
  return (
    <div className="relative pl-[41px] pr-[35px] md:px-[85px] 2xl:px-[162px] 3xl:px-[201px] w-full bg-center bg-cover bg-forAuditorsBg md:bg-PricingBgMd bg-no-repeat flex justify-center pt-[82px] md:pt-[120px] pb-[86px] md:pb-[352px]">
      <div className="w-full 3xl:max-w-[1516px] 2xl:max-w-[1116px] relative z-10">
        <div className="w-fit flex flex-col gap-[12px] 2xl:h-full justify-between justify-start 3xl:max-w-[unset] md:max-w-[432px]">
          <h1
            className="font-inter text-[#06D7F9] md:text-[24px] text-[18px] font-[700] md:leading-[30px] leading-[26px]"
            data-scroll
            data-scroll-speed="0.1"
          >
            Pricing
          </h1>
          <div className="flex flex-col 2xl:gap-[42px] gap-[20px]">
            <h2
              className="font-[700] md:text-[60px] text-[30px] md:leading-[68px] leading-[34px]"
              data-scroll
              data-scroll-speed="0.12"
            >
              Transparent Pricing.
              <br className="md:block hidden" /> Global Delivery.
              <br className="md:block hidden" /> Certified Quality.
            </h2>
            <div
              className="font-[700] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px] flex flex-col gap-[20px] max-w-[747px]"
              data-scroll
              data-scroll-speed="0.15"
            >
                Flexible audit packages and on-site services - from quick
                standard checks to comprehensive supply chain assessments.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
