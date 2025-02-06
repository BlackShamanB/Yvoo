function Hero() {
  return (
    <div
      className="relative px-[41px] md:px-[20px] 2xl:px-[162px] 3xl:px-[202px] w-full h-[712px] md2:h-[680px] 2xl:h-[820px] bg-center bg-cover bg-consultingBg md:bg-consultingBgmd 2xl:bg-consultingBg2xl 3xl:bg-consultingBg3xl bg-no-repeat flex justify-center pt-[78px] md:pt-[156px] pb-[930px] md:pb-[1322px] 2xl:pb-[240px] "
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="w-full 3xl:max-w-[1514px] 2xl:max-w-[1116px] md:max-w-[598px] flex flex-col justify-start relative z-10">
        <div className="flex flex-col 2xl:gap-[55px] md:gap-[44px] gap-[26px]">
          <h1 className="uppercase font-inter text-[30px] md:text-[40px] 2xl:text-[50px] font-[800] leading-[34px] md:leading-[44px] 2xl:leading-[54px] max-w-[598px] xl:max-w-[880px]"
        data-scroll
        data-scroll-speed="0.15">
            Welcome to
            <br /> YVOO Technology,
            <br className="2xl:block hidden"/> your trusted partner
            <br  className="2xl:block hidden"/> in procurement
            <br />
            consulting.
          </h1>
          <div className="max-w-[325px] md:max-w-[478px] font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[24px] leading-[20px]"
        data-scroll
        data-scroll-speed="0.12">
            <p>
              We specialize in providing expert guidance and support to help
              businesses of all sizes optimize their procurement strategies,
              streamline their operations, and achieve significant cost savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
