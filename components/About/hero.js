function Hero() {
  return (
    <div className="w-full px-[41px] 3xl:px-[202px] 2xl:px-[162px] py-[39px] 2xl:pt-[118px] 3xl:pb-[198px] 2xl:pb-[138px] pb-[100px] 3xl:bg-aboutBg3xl 2xl:bg-aboutBg2xl bg-aboutBg bg-no-repeat bg-right-top">
      <div className="py-[36px] 2xl:mb-[53px] mb-[29px]">
        <h1
          className="text-[#00D1EF] uppercase font-inter font-[800] text-[40px] 2xl:text-[60px] leading-[44px] 2xl:leading-[60px]"
          data-scroll
          data-scroll-speed="0.1"
        >
          About Us
        </h1>
      </div>
      <h1
        className="text-[#00D1EF] font-[700] text-[26px] 2xl:text-[32px] leading-[30px] 2xl:leading-[36px] mb-[24px] 2xl:mb-[42px]"
        data-scroll
        data-scroll-speed="0.12"
      >
        Our Story
      </h1>
      <div className="grid grid-cols-1 customxs:grid-cols-2 3xl:gap-[170px] 2xl:gap-[110px]">
        <div
          className="font-[400] 2xl:text-[16px] text-[14px] leading-[20px] flex flex-col gap-[20px] flex-1 2xl:mb-[0px] mb-[60px]"
          data-scroll
          data-scroll-speed="0.15"
        >
          <p>
            At YVOO, we know firsthand the struggles of managing large and
            complex procurement projects on a global scale. As a team of
            experienced procurement professionals, we've spent the last 25 years
            working on some of the most significant projects for leading
            manufacturing, automotive, and engineering companies. But as the
            market environment became more complex, we found ourselves facing a
            bottleneck in the traditional methods of sourcing and verifying
            suppliers.
          </p>
          <p>
            That's when we decided to take matters into our own hands and
            founded YVOO, a European tech company based in Croatia. Our goal was
            to create a solution that would revolutionize the way procurement
            teams discover and audit suppliers.
          </p>
        </div>
        <div
          className="font-[400] 2xl:text-[16px] text-[14px] leading-[20px] flex flex-col gap-[20px] flex-1 basis-[500px]"
          data-scroll
          data-scroll-speed="0.1"
        >
          <p>
            We set out on a journey to build a platform that would be
            user-friendly, smart, and highly reliable. We wanted to create a
            tool that would assist innovative procurement teams in making
            strategic sourcing decisions quickly and efficiently, while
            minimizing risk, costs, and environmental impact.
          </p>
          <p>
            We poured our hearts and souls into creating YVOO, and after years
            of hard work, we are proud to say that we have succeeded in our
            mission. Our solution has received overwhelmingly positive feedback
            from procurement teams at leading companies.
          </p>
          <p>
            But our journey doesn't end here. We are constantly working to
            improve and expand our platform, so we can support procurement teams
            with the tools they need to succeed in today's ever-evolving market
            environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
