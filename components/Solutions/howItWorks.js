import Image from "next/image";

function HowItWorks() {
  return (
    <div className="relative w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[64px] bg-white">
      <Image
        src="/images/solution_triagle.png"
        width={116}
        height={139}
        alt="solution_triagle"
        className="absolute top-[27%] left-[34%]"
      />
      <h2 className="mb-[30px] md:mb-[34px] text-black font-[700] text-[24px] leading-[24px]">
        Benefits that Await You:{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 md:gap-[24px] mb-[62px] md:mb-[74px] 2xl:mb-[104px]">
        <div className="[&>*]:text-black flex gap-[12px]">
          <div className="flex">
            <div className="flex-1 w-[15px] h-[15px] rounded-full bg-[#53D3AA]" />
          </div>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
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
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
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
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
            Cost and Time Savings: Say goodbye to expenses like airfare and
            lodging. With ScanPro+, you can conduct on-demand assessments,
            regardless of your suppliers' location. Assess readiness at a higher
            frequency and larger scale while saving valuable resources.
          </p>
        </div>
        <div className="[&>*]:text-black flex gap-[20px]">
          <div className="flex">
            <div className="flex-1 w-[15px] h-[15px] rounded-full bg-[#53D3AA]" />
          </div>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
            Tailored Readiness Checks: Customize supplier assessments to fit
            your specific requirements. ScanPro+ understands that each business
            is unique, providing comprehensive assessments that meet your
            expectations.
          </p>
        </div>
      </div>
      <h1 className="text-black mb-[30px] md:mb-[72px] max-w-[300px] font-machina font-[800] uppercase text-[30px] customxs:text-[40px] 2xl:text-[50px] leading-[30px] customxs:leading-[40px] 2xl:leading-[50px]">
        How <br /> it works
      </h1>
      <div className="grid grid-cols-1 customxs:grid-rows-2 customxs:grid-cols-2 md:grid-cols-3 gap-[24px] md:gap-[78px] mb-[66px] md:mb-[75px] 2xl:mb-[122px]">
        <div className="[&>*]:text-black flex gap-[12px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <p className="font-[700] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
            ScanPro+ offers a user-friendly technology platform that seamlessly
            connects you to our extensive global network of YVOO agents. Our
            streamlined process ensures a seamless experience from start to
            finish.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col gap-[14px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
            STEP 1
          </h1>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
            Request the Readiness Check: Submit your supplier readiness check
            request effortlessly through our user-friendly ScanPro+ platform.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col gap-[14px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
            STEP 2
          </h1>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
            Match with an YVOO Agent: Our platform intelligently matches you
            with a dedicated YVOO agent who will conduct the on-site evaluation
            on your behalf.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col gap-[14px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
            STEP 3
          </h1>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
            Schedule and Run the Check: The appointed YVOO agent will
            meticulously plan, schedule, and conduct the readiness check using
            our cutting-edge ScanPro+ method.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col gap-[14px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
            STEP 4
          </h1>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
            Receive Detailed Reports and Rating: Sit back and relax as our
            agents deliver comprehensive reports outlining the strengths,
            weaknesses, and rating of each supplier evaluated.
          </p>
        </div>
        <div className="[&>*]:text-black flex flex-col gap-[14px] md2:max-w-[306px] 2xl:max-w-[400px]">
          <h1 className="!text-[#53D3AA] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
            STEP 5
          </h1>
          <p className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] mb-6">
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
