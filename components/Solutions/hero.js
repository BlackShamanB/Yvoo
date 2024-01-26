function Hero() {
  return (
    <div className="relative grid w-full flex justify-center 3xl:bg-solutionBg3xl md:bg-solutionBgmd bg-solutionBg bg-no-repeat md:bg-contain bg-[size:100%] md:bg-[position:0_0] bg-[position:0_23%]">
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative grid grid-cols-1 2xl:grid-cols-2 w-full mb-[100px] lg:mt-[232px] md:mt-[400px] mt-[787px] md:mb-[120px] lg:mb-[166px] 2xl:mb-[254px]"
        priority
      >
        <h1 className="md:max-w-[465px] 2xl:max-w-none font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px] flex-1 basis-[500px]">
          Supercharge Your Sourcing Process with{" "}
          <b className="text-primary">YVOO Sourcer</b>Pro+
        </h1>
        <div className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] flex flex-col gap-4 flex-1 basis-[500px]">
          <p>
            Stay ahead of the game and overcome the challenges of today's
            procurement landscape. Inflation and supply chain disruptions demand
            a disruptive solution to ensure resilience and battle future black
            swans. Traditional sourcing methods no longer suffice, leaving
            companies vulnerable to compromised quality, ethical concerns, and
            sustainability issues.
          </p>
          <p>
            Enter YVOO B2BSourcerPro+. Our cutting-edge digital platform
            transforms the way you find and audit suppliers, empowering you to
            maintain sourcing standards, uphold ESG commitments, navigate
            complex markets, and bolster operational resilience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
