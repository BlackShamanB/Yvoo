function Hero() {
  return (
    <div
      // style={{ backgroundSize: "100% 100%" }}
      className="relative px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] w-full h-[712px] 2xl:h-[780px] bg-center bg-cover bg-forAuditorsBgsm customxs:bg-forAuditorsBgmd md2:bg-forAuditorsBg2xl 2xl:bg-forAuditorsBg bg-no-repeat flex justify-center pt-[40px] customxs:pt-[93px] md2:pt-[132px] 2xl:pt-[93px] pb-[86px] md:pb-[140px] 2xl:pb-[240px]"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full 3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] relative z-10">
        <div className="w-fit flex flex-col gap-[24px] h-full justify-between customxs:justify-start">
          <h1 className="uppercase font-machina text-[40px] md:text-[50px] 2xl:text-[64px] font-[800] leading-[36px] md:leading-[45px] 2xl:leading-[58px]">
            For
            <br /> auditors
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="font-[700] text-[24px] leading-[26px] 2xl:text-[32px] 2xl:leading-[36px]">
              Join the
              <br /> YVOO ScanPro+ Team
            </h2>
            <div className="font-[400] text-[16px] leading-[19px] flex flex-col gap-4 max-w-[320px]">
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
          <div className="md2:flex font-[400] text-[16px] leading-[19px] flex-col gap-4">
            <p>
              Are you looking for a flexible and rewarding career opportunity?
              Do
              <br />
              you have experience in supplier auditing or are you eager to learn
              <br />
              more about the industry? YVOO is seeking motivated and skilled
              <br />
              individuals to join our team of freelance agents.
            </p>
            <p>
              As an YVOO agent, you will have the freedom to set your own <br />{" "}
              schedule and earn money on your own terms. By conducting <br />{" "}
              YVOO Quick Scans, you will play a critical role in helping
              <br /> companies ensure the safety and integrity of their supply
              chains by
              <br /> conducting independent, unbiased audits of potential and
              existing <br />
              suppliers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
