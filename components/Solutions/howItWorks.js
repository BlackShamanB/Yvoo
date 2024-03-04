import Image from "next/image";

function HowItWorks() {
  return (
    <div className="relative w-full px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] 2xl:pt-[150px] md:pt-[120px] pt-[100px] 3xl:pb-[150px] 2xl:pb-[126px] bg-white">
      <Image
        src="/images/solution_triagle.png"
        width={116}
        height={139}
        alt="solution_triagle"
        className="absolute 3xl:block md:hidden block md:top-[35%] top-[42.7%] md:left-[33%] left-[62%] md:max-w-[unset] max-w-[67px]"
        data-scroll
        data-scroll-speed="0.13"
      />
      <h2
        className="mb-[30px] 2xl:mb-[30px] 2xl:mb-[42px] text-black font-[700] 2xl:text-[32px] md:text-[28px] text-[26px] 2xl:leading-[36px] md:leading-[32px] leading-[30px]"
        data-scroll
        data-scroll-speed="0.12"
      >
        Benefits that Await You:{" "}
      </h2>
      <div
        className="grid grid-cols-1 2xl:grid-rows-2 2xl:grid-cols-2 3xl:gap-x-[170px] 2xl:gap-x-[110px] 2xl:gap-y-[48px] md:gap-y-[30px] mb-[98px] md:mb-[125px] 2xl:mb-[114px] 3xl:mb-[194px]"
        data-scroll
        data-scroll-speed="0.15"
      >
        <div className="[&>*]:text-black flex md:gap-[12px] gap-[8px] md:mb-[0] mb-[30px] md:order-[unset] order-0">
          <div className="flex">
            <div className="flex-1 md:w-[15px] w-[12px] md:h-[15px] h-[12px] rounded-full bg-[#53D3AA] md:mt-[0] mt-[4px]" />
          </div>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Streamlined Process: Embrace a hassle-free approach to supplier
            readiness checks. With ScanPro+, you can easily assess supplier
            capabilities, verify legal standing, and ensure compliance without
            the need for travel.
          </p>
        </div>
        <div className="[&>*]:text-black flex md:gap-[12px] gap-[8px] md:order-[unset] order-2 md:mb-[0] mb-[26px]">
          <div className="flex">
            <div className="flex-1 md:w-[15px] w-[12px] md:h-[15px] h-[12px] rounded-full bg-[#53D3AA] md:mt-[0] mt-[4px]" />
          </div>{" "}
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Reliable YVOO Agents: Connect instantly with our globally present,
            qualified YVOO agents. Our ScanPro+ platform empowers you to conduct
            reliable and cost-effective on-site investigations anytime,
            anywhere. Trust in the expertise of our trained and certified agents
            who evaluate suppliers based on International Standards
          </p>
        </div>
        <div className="[&>*]:text-black flex md:gap-[12px] gap-[8px] md:mb-[0] mb-[29px] md:order-[unset] order-1">
          <div className="flex">
            <div className="flex-1 md:w-[15px] w-[12px] md:h-[15px] h-[12px] rounded-full bg-[#53D3AA] md:mt-[0] mt-[4px]" />
          </div>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Cost and Time Savings: Say goodbye to expenses like airfare and
            lodging. With ScanPro+, you can conduct on-demand assessments,
            regardless of your suppliers' location. Assess readiness at a higher
            frequency and larger scale while saving valuable resources.
          </p>
        </div>
        <div className="[&>*]:text-black flex md:gap-[12px] gap-[8px] md:order-[unset] order-3">
          <div className="flex">
            <div className="flex-1 md:w-[15px] w-[12px] md:h-[15px] h-[12px] rounded-full bg-[#53D3AA] md:mt-[0] mt-[4px]" />
          </div>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Tailored Readiness Checks: Customize supplier assessments to fit
            your specific requirements. ScanPro+ understands that each business
            is unique, providing comprehensive assessments that meet your
            expectations.
          </p>
        </div>
      </div>
      <h1
        className="text-black mb-[14px] md:mb-[21px] 2xl:mb-[30px] max-w-[300px] font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px]"
        data-scroll
        data-scroll-speed="0.2"
      >
        How <br /> it works
      </h1>
      <div
        className="grid grid-cols-1 2xl:grid-cols-3 gap-[29px] md:gap-[24px] 2xl:gap-[40px] 3xl:gap-[158px] mb-[26px] md:mb-[23px] 2xl:mb-[70px]"
        data-scroll
        data-scroll-speed="0.18"
      >
        <div className="[&>*]:text-black flex md:gap-[12px] gap-[8px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <p className="font-[700] text-[14px] md:text-[16px] leading-[20px] md:mb-6">
            ScanPro+ offers a user-friendly technology platform that seamlessly
            connects you to our extensive global network of YVOO agents. Our
            streamlined process ensures a seamless experience from start to
            finish.
          </p>
        </div>
        <div className="border border-[#53D3AA] border-solid md:mt-[-8px] md:mb-[10px] 2xl:hidden block"></div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] md:gap-[19px] gap-[10px] md2:max-w-[306px] 2xl:max-w-[400px] 3xl:mt-[-60px] 2xl:mt-[-62px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[40px] leading-[34px] md:leading-[36px] md:leading-[40px]">
            STEP 1
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] 2xl:mb-6 md:mb-[12px]">
            Request the Readiness Check: Submit your supplier readiness check
            request effortlessly through our user-friendly ScanPro+ platform.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] md:gap-[19px] gap-[10px] md2:max-w-[306px] 2xl:max-w-[400px] 3xl:mt-[-60px] 2xl:mt-[-62px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[40px] leading-[34px] md:leading-[36px] md:leading-[40px]">
            STEP 2
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] 2xl:mb-6 md:mb-[12px]">
            Match with an YVOO Agent: Our platform intelligently matches you
            with a dedicated YVOO agent who will conduct the on-site evaluation
            on your behalf.
          </p>
        </div>
      </div>
      <div
        className="border border-[#53D3AA] border-solid 3xl:mb-[93px] mb-[90px] 2xl:block hidden"
        data-scroll
        data-scroll-speed="0.15"
      ></div>
      <div
        className="grid grid-cols-1 2xl:grid-cols-3 gap-[26px] md:gap-[24px] 2xl:gap-[40px] 3xl:gap-[155px] mb-[101px] md:mb-[105px] 2xl:mb-[30px]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] md:gap-[19px] gap-[10px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[40px] leading-[34px] leading-[36px] md:leading-[40px]">
            STEP 3
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] 2xl:mb-6 md:mb-[12px]">
            Schedule and Run the Check: The appointed YVOO agent will
            meticulously plan, schedule, and conduct the readiness check using
            our cutting-edge ScanPro+ method.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] md:gap-[19px] gap-[10px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[40px] leading-[34px] leading-[36px] md:leading-[40px]">
            STEP 4
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] 2xl:mb-6 md:mb-[12px]">
            Receive Detailed Reports and Rating: Sit back and relax as our
            agents deliver comprehensive reports outlining the strengths,
            weaknesses, and rating of each supplier evaluated.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] md:gap-[19px] gap-[10px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[40px] leading-[34px] md:leading-[40px]">
            STEP 5
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] 2xl:mb-6 md:mb-[12px]">
            Leave Feedback: Your satisfaction is crucial to us. Share your
            feedback with the YVOO agent to help us continuously enhance our
            high-quality services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
