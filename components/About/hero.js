function Hero() {
  return (
    <div className="w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[50px] md:py-[60px] 2xl:py-[106px]">
      <h1 className="text-[#00D1EF] font-[700] text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] mb-[14px] md:mb-[26px]">
        Our Story
      </h1>
      <div className="grid grid-cols-1 customxs:grid-cols-2 gap-[24px]">
        <div className="font-[400] text-[16px] leading-[19px] flex flex-col gap-4 flex-1 basis-[500px]">
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
        <div className="font-[400] text-[16px] leading-[19px] flex flex-col gap-4 flex-1 basis-[500px]">
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
