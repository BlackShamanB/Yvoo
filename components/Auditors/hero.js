function Hero() {
  return (
    <div
      // style={{ backgroundSize: "100% 100%" }}
      className="relative pl-[41px] pr-[35px] md:px-[85px] 2xl:px-[162px] 3xl:px-[201px] w-full h-[1154px] md:h-[820px] 2xl:bg-center 2xl:bg-cover bg-forAuditorsBg md:bg-forAuditorsBgmd 2xl:bg-forAuditorsBg2xl 3xl:bg-forAuditorsBg3xl bg-no-repeat bg-cover flex justify-center pt-[75px] md:pt-[157px] 2xl:pt-[120px] pb-[86px] md:pb-[160px]"
    >
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="w-full 3xl:max-w-[1516px] 2xl:max-w-[1116px] relative z-10">
        <div className="w-fit flex flex-col md:gap-[12px] gap-[29px] 2xl:h-full justify-between justify-start 3xl:max-w-[unset] md:max-w-[432px]">
          <h1
            className="font-inter text-[#06D7F9] md:text-[24px] text-[40px] font-[700] md:leading-[30px] leading-[44px]"
            data-scroll
            data-scroll-speed="0.1"
          >
            For Auditors
          </h1>
          <div className="flex flex-col 2xl:gap-[42px] gap-[42px]">
            <h2
              className="font-[700] md:text-[60px] text-[26px] md:leading-[68px] leading-[30px]"
              data-scroll
              data-scroll-speed="0.12"
            >
              Join the <br />
              YVOO ScanPro+ Team
            </h2>
            <div
              className="font-[400] md:text-[24px] text-[14px] md:leading-[30px] leading-[20px] flex flex-col gap-[20px] max-w-[747px] md:pr-[0] pr-[6px]"
              data-scroll
              data-scroll-speed="0.15"
            >
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
