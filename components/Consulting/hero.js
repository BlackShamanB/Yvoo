function Hero() {
  return (
    <div
      // style={{ backgroundSize: "100% 100%" }}
      className="relative px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] w-full h-[712px] md2:h-[680px] 2xl:h-[780px] bg-center bg-cover bg-consultingBgsm customxs:bg-consultingBgmd md2:bg-consultingBg2xl 2xl:bg-consultingBg bg-no-repeat flex justify-center pt-[38px] md:pt-[68px] 2xl:pt-[93px] pb-[86px] md:pb-[140px] 2xl:pb-[240px] "
    >
      <div className="customxs:hidden absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full 3xl:max-w-[1514px] 2xl:max-w-[1116px] md:max-w-[598px] flex flex-col justify-center customxs:justify-start relative z-10">
        <div className="flex flex-col gap-[25px]">
          <h1 className="md2:hidden uppercase font-machina text-[30px] customxs:text-[40px] 2xl:text-[50px] font-[800] leading-[30px] customxs:leading-[40px] 2xl:leading-[50px] max-w-[330px] xl:max-w-[880px]">
            Welcome to
            <br /> YVOO Technology,
            <br />
            your trusted partner in procurement consulting.
          </h1>
          <h1 className="hidden md2:block uppercase font-machina text-[30px] customxs:text-[40px] 2xl:text-[50px] font-[800] leading-[30px] customxs:leading-[40px] 2xl:leading-[50px] max-w-[330px] xl:max-w-[880px]">
            Welcome to
            <br /> YVOO Technology,
            <br /> your trusted partner
            <br /> in procurement
            <br />
            consulting.
          </h1>
          <div className="customxs:max-w-[325px] md:max-w-[325px] md2:hidden font-[700] text-[18px] leading-[18px] customxs:text-[24px] customxs:leading-[24px]">
            <p>
              We specialize in providing expert guidance and support to help
              businesses of all sizes optimize their procurement strategies,
              streamline their operations, and achieve significant cost savings.
            </p>
          </div>
          <div className="hidden md2:flex font-[700] text-[18px] leading-[18px] customxs:text-[24px] customxs:leading-[24px]">
            <p>
              We specialize in providing expert
              <br />
              guidance and support to help businesses
              <br /> of all sizes optimize their procurement
              <br /> strategies, streamline their operations,
              <br /> and achieve significant cost savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
