import Image from "next/image";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";

function Discover() {
  return (
    <div className="relative grid w-full flex justify-center 2xl:bg-discoverConnectExcel2xl md:bg-discoverConnectExcelmd bg-discoverConnectExcel bg-no-repeat 3xl:bg-contain 2xl:bg-auto bg-[size:100%] 3xl:bg-[position:0_0] 2xl:bg-[position:-240px_2px] md:bg-[position:0_0%] bg-[position:0_19%]">
      <Image
        src="/icons/greenTriangle-1.png"
        width={116}
        height={139}
        alt="triangle"
        className="absolute 2xl:top-[269px] md:top-[22%] top-[34%] 3xl:left-[15%] 2xl:left-[7%] md:left-[16%] left-[11%] mouse-parallax 2xl:max-w-[116px] max-w-[63px]"
        priority
        data-scroll data-scroll-speed="0.3"
      />
      <Image
        src="/icons/crosses-1.svg"
        width={101}
        height={113}
        alt="triangle"
        className="absolute 2xl:top-[548px] md:top-[35.6%] top-[41.1%] 2xl:left-[11%] md:left-[13%] left-[6%] mouse-parallax md:max-w-[101px] max-w-[63px]"
        priority
        data-scroll data-scroll-speed="0.2"
      />
      <Image
        src="/icons/arch-1.png"
        width={180}
        height={170}
        alt="triangle"
        className="absolute 2xl:top-[790px] md:top-[96.4%] top-[98.3%] 3xl:left-[40%] 2xl:left-[36.6%] md:left-[52.6%] left-[53%] mouse-parallax md:max-w-[180px] max-w-[127px] z-[1]"
        priority
        data-scroll data-scroll-speed="0.5"
      />
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative grid grid-cols-1 2xl:grid-cols-2 w-full mb-[100px] 3xl:mt-[232px] 2xl:mt-[200px] md:mt-[400px] sm:mt-[262px] mt-[787px] 3xl:mb-[254px] 2xl:mb-[162px] md:mb-[115px]"
        priority
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="2xl:pl-[150px] pl-[20px] pr-[20px] 2xl:pr-[65px] 2xl:pt-[190px] md:pt-[0] mt-[0] md:mt-0" data-scroll data-scroll-speed="0.1">
          <div className="relative">
            <Image
              src="/logo.svg"
              width="539"
              height="155"
              alt="discover"
              objectPosition="center"
              className="object-cover 3xl:max-w-[539px] md:max-w-[390px] max-w-[220px] 3xl:ml-[auto] 2xl:ml-[-37px] mx-[auto] md:mb-[12px] mb-[8px]"
            />

            <h1 className="md:leading-[26px] leading-[14px] md:text-[21px] text-[12px] font-[700] 2xl:max-w-[310px] md:max-w-[390px] max-w-[220px] 2xl:w-[310px] md:w-[390px] 3xl:mr-[57px] md:float-right md:mx-[0] mx-[auto] text-right 3xl:mt-[0] md:mt-[1px] 3xl:mr-[0] 2xl:mr-[-11px] md:mr-[84px]">
              Discover, Connect, Excel.
            </h1>
          </div>
        </div>

        <div
          className="3xl:pr-[0] md:px-[0] px-[40px] 2xl:mt-[0] md:mt-[119px] mt-[106px] md:3xl:pl-[84px] 2xl:pl-[54px] my-auto flex flex-col gap-[20px] font-[400] leading-[20px] md:text-[16px] text-[14px] leading-[20px] max-w-[809px] font-inter"
          data-scroll
          data-scroll-speed="0.1"
        >
          <p>
            Step into the future of industrial B2B procurement with YVOO
            SourcerPo+. Our powerful platform is specifically designed to meet
            the sourcing needs of businesses in various{" "}
            <Link className="cursor-pointer underline" href={"/industries"}>
              industries
            </Link>
            . Whether you're searching for reliable suppliers or looking to
            expand your network, B2BSourcerPro+ is your go-to solution.
          </p>
          <h2 className="font-[500] md:text-[24px] text-[16px] md:leading-[24px] leading-[20px]">
            {" "}
            Why Choose YVOO B2BSourcerPro+?{" "}
          </h2>
          <p>
            Effortless Supplier Discovery: Unlock a world of quality suppliers
            tailored to your industry and&nbsp;requirements. With our AI-powered
            search&nbsp;
            <Link
              href="/solutions/#scanpro"
              className="cursor-pointer underline"
            >
              capabilities
            </Link>
            , you can swiftly identify and evaluate vendors worldwide, saving
            you time and effort.
          </p>
          <p>
            On-Site Supplier Readiness Check: Gain peace of mind with our
            comprehensive on-site supplier assessments. We go beyond
            surface-level information by conducting thorough evaluations to
            predict supplier readiness and ensure a remarkable audit success
            rate.
          </p>
          <p>
            Seamless Connection: Connect directly with suppliers and establish
            fruitful business relationships. YVOO SourcerPro+ facilitates smooth
            communication and collaboration, enabling successful
            <ReactScrollLink
              activeClass="active"
              to="search"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="underline cursor-pointer"
            >
              B2B partnerships
            </ReactScrollLink>
            .
          </p>
          <p>
            Unleash Your Potential: With YVOO SourcerPro+, excel in your
            procurement efforts. Our platform empowers you to optimize your
            supply chain, drive efficiency, and achieve your business goals.
          </p>
          <p>
            Join YVOO SourcerPro+ today and experience the game-changing
            benefits of our industrial supplier platform. Discover, connect, and
            excel like never before with our AI-powered search capabilities and
            on-site supplier readiness check.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
