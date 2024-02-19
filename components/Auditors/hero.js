function Hero() {
  return (
    <div
      // style={{ backgroundSize: "100% 100%" }}
      className="relative pl-[41px] pr-[35px] md:px-[85px] 2xl:px-[162px] 3xl:px-[201px] w-full h-[1154px] md:h-[820px] 2xl:bg-center 2xl:bg-cover bg-forAuditorsBg md:bg-forAuditorsBgmd 2xl:bg-forAuditorsBg2xl 3xl:bg-forAuditorsBg3xl bg-no-repeat bg-cover flex justify-center pt-[75px] md:pt-[157px] 2xl:pt-[154px] pb-[86px] 2xl:pb-[240px]"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full 3xl:max-w-[1516px] 2xl:max-w-[1116px] relative z-10">
        <div className="w-fit flex flex-col 2xl:gap-[58px] md:gap-[43px] gap-[29px] 2xl:h-full justify-between justify-start 3xl:max-w-[unset] md:max-w-[432px]">
          <h1
            className="uppercase font-machina text-[#06D7F9] text-[40px] md:text-[50px] 2xl:text-[60px] font-[800] leading-[44px] md:leading-[54px] 2xl:leading-[64px]"
            data-scroll
            data-scroll-speed="0.1"
          >
            For
            <br /> auditors
          </h1>
          <div className="flex flex-col 2xl:gap-[22px] gap-[16px]">
            <h2 className="font-[700] text-[26px] md:text-[28px] 2xl:text-[32px] leading-[30px] md:leading-[32px] 2xl:leading-[36px]"      data-scroll
      data-scroll-speed="0.12">
              Join the
              <br /> YVOO ScanPro+ Team
            </h2>
            <div className="font-[400] text-[14px] md:text-[16px] leading-[20px] flex flex-col gap-[20px] max-w-[593px] md:pr-[0] pr-[6px]"      data-scroll
      data-scroll-speed="0.15">
              <p>
                Are you looking for a flexible and rewarding career opportunity?
                Do you have experience in supplier auditing or are you eager to
                learn more about the industry? YVOO is seeking motivated and
                skilled individuals to join our team of freelance agents.
              </p>
              <p>
                As an YVOO agent, you will have the freedom to set your own{" "}
                schedule and earn money on your own terms. By conducting YVOO
                Quick Scans, you will play a critical role in helping companies
                ensure the safety and integrity of their supply chains by
                conducting independent, unbiased audits of potential and
                existing suppliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
