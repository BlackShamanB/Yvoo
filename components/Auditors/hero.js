function Hero() {
  return (
    <div
      // style={{ backgroundSize: "100% 100%" }}
      className="relative px-[20px] lg:px-[176px] 2xl:px-[201px] w-full h-[712px] 2xl:h-[820px] bg-center bg-cover bg-forAuditorsBg 2xl:bg-forAuditorsBg2xl 3xl:bg-forAuditorsBg3xl bg-no-repeat flex justify-center pt-[40px] 2xl:pt-[154px] pb-[86px] 2xl:pb-[240px]"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full 3xl:max-w-[1516px] 2xl:max-w-[1116px] relative z-10">
        <div className="w-fit flex flex-col gap-[58px] h-full justify-between justify-start">
          <h1 className="uppercase font-machina text-[#06D7F9] text-[40px] 2xl:text-[60px] font-[800] leading-[36px] 2xl:leading-[64px]">
            For
            <br /> auditors
          </h1>
          <div className="flex flex-col gap-[22px]">
            <h2 className="font-[700] text-[24px] leading-[26px] 2xl:text-[32px] 2xl:leading-[36px]">
              Join the
              <br /> YVOO ScanPro+ Team
            </h2>
            <div className="font-[400] text-[16px] leading-[20px] flex flex-col gap-[20px] max-w-[593px]">
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
