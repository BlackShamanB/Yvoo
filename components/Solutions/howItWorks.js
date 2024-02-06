import Image from "next/image";

function HowItWorks() {
  return (
    <div className="relative w-full px-[20px] md:px-[50px] 2xl:px-[162px] 3xl:px-[202px] 2xl:pt-[150px] 3xl:pb-[150px] 2xl:pb-[126px] bg-white">
      <Image
        src="/images/solution_triagle.png"
        width={116}
        height={139}
        alt="solution_triagle"
        className="absolute 3xl:block md:hidden block top-[35%] left-[33%]"
      />
      <h2 className="mb-[30px] md:mb-[42px] text-black font-[700] text-[32px] leading-[36px]">
        Benefits that Await You:{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 3xl:gap-x-[170px] 2xl:gap-x-[110px] md:gap-y-[48px] mb-[62px] md:mb-[74px] 2xl:mb-[114px] 3xl:mb-[194px]">
        <div className="[&>*]:text-black flex gap-[12px]">
          <div className="flex">
            <div className="flex-1 w-[15px] h-[15px] rounded-full bg-[#53D3AA]" />
          </div>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Streamlined Process: Embrace a hassle-free approach to supplier
            readiness checks. With ScanPro+, you can easily assess supplier
            capabilities, verify legal standing, and ensure compliance without
            the need for travel.
          </p>
        </div>
        <div className="[&>*]:text-black flex gap-[12px]">
          <div className="flex">
            <div className="flex-1 w-[15px] h-[15px] rounded-full bg-[#53D3AA]" />
          </div>{" "}
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Reliable YVOO Agents: Connect instantly with our globally present,
            qualified YVOO agents. Our ScanPro+ platform empowers you to conduct
            reliable and cost-effective on-site investigations anytime,
            anywhere. Trust in the expertise of our trained and certified agents
            who evaluate suppliers based on International Standards
          </p>
        </div>
        <div className="[&>*]:text-black flex gap-[12px]">
          <div className="flex">
            <div className="flex-1 w-[15px] h-[15px] rounded-full bg-[#53D3AA]" />
          </div>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Cost and Time Savings: Say goodbye to expenses like airfare and
            lodging. With ScanPro+, you can conduct on-demand assessments,
            regardless of your suppliers' location. Assess readiness at a higher
            frequency and larger scale while saving valuable resources.
          </p>
        </div>
        <div className="[&>*]:text-black flex gap-[12px]">
          <div className="flex">
            <div className="flex-1 w-[15px] h-[15px] rounded-full bg-[#53D3AA]" />
          </div>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[20px] md:leading-[20px]">
            Tailored Readiness Checks: Customize supplier assessments to fit
            your specific requirements. ScanPro+ understands that each business
            is unique, providing comprehensive assessments that meet your
            expectations.
          </p>
        </div>
      </div>
      <h1 className="text-black mb-[30px] md:mb-[30px] max-w-[300px] font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[54px]">
        How <br /> it works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-[24px] 2xl:gap-[40px] 3xl:gap-[158px] mb-[66px] md:mb-[75px] 2xl:mb-[70px]">
        <div className="[&>*]:text-black flex gap-[12px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <p className="font-[700] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-6">
            ScanPro+ offers a user-friendly technology platform that seamlessly
            connects you to our extensive global network of YVOO agents. Our
            streamlined process ensures a seamless experience from start to
            finish.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] gap-[19px] md2:max-w-[306px] 2xl:max-w-[400px] 3xl:mt-[-60px] 2xl:mt-[-62px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[40px] leading-[30px] md:leading-[36px] 2xl:leading-[40px]">
            STEP 1
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-6">
            Request the Readiness Check: Submit your supplier readiness check
            request effortlessly through our user-friendly ScanPro+ platform.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] gap-[19px] md2:max-w-[306px] 2xl:max-w-[400px] 3xl:mt-[-60px] 2xl:mt-[-62px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[40px] leading-[30px] md:leading-[36px] 2xl:leading-[40px]">
            STEP 2
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-6">
            Match with an YVOO Agent: Our platform intelligently matches you
            with a dedicated YVOO agent who will conduct the on-site evaluation
            on your behalf.
          </p>
        </div>
      </div>
      <div className="border border-[#53D3AA] border-solid 3xl:mb-[93px] mb-[90px]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-[24px] 2xl:gap-[40px] 3xl::gap-[155px] mb-[66px] md:mb-[75px] 2xl:mb-[30px]">
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] gap-[19px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[40px] leading-[30px] md:leading-[36px] 2xl:leading-[40px]">
            STEP 3
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-6">
            Schedule and Run the Check: The appointed YVOO agent will
            meticulously plan, schedule, and conduct the readiness check using
            our cutting-edge ScanPro+ method.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] gap-[19px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[40px] leading-[30px] md:leading-[36px] 2xl:leading-[40px]">
            STEP 4
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-6">
            Receive Detailed Reports and Rating: Sit back and relax as our
            agents deliver comprehensive reports outlining the strengths,
            weaknesses, and rating of each supplier evaluated.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col 3xl:gap-[14px] gap-[19px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[40px] leading-[30px] md:leading-[36px] 2xl:leading-[40px]">
            STEP 5
          </h1>
          <p className="font-[400] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px] mb-6">
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
