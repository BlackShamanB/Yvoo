import Image from "next/image";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";

function Discover() {
  return (
    <div
      className="relative grid w-full flex justify-center 2xl:bg-discoverConnectExcel2xl md:bg-discoverConnectExcelmd bg-discoverConnectExcel bg-no-repeat md:bg-contain bg-[size:100%] md:bg-[position:0_0] bg-[position:0_23%]" >
      <Image
        src="/icons/greenTriangle-1.png"
        width={116}
        height={139}
        alt="triangle"
        className="absolute sm:top-[269px] top-[688px] left-[15%] mouse-parallax 2xl:max-w-[116px] max-w-[63px]"
        priority
      />
      <Image
        src="/icons/crosses-1.svg"
        width={101}
        height={113}
        alt="triangle"
        className="absolute sm:top-[548px] top-[812px] sm:left-[10%] left-[5%] mouse-parallax md:max-w-[101px] max-w-[63px]"
        priority
      />
      <Image
        src="/icons/arch-1.png"
        width={180}
        height={170}
        alt="triangle"
        className="absolute 2xl:top-[790px] top-[97%] left-[40%] mouse-parallax md:max-w-[180px] max-w-[127px] z-[1]"
        priority
      />
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative grid grid-cols-1 2xl:grid-cols-2 w-full mb-[100px] lg:mt-[232px] md:mt-[400px] sm:mt-[262px] mt-[787px] md:mb-[120px] lg:mb-[166px] 2xl:mb-[254px]" priority data-scroll data-scroll-speed="0.1">
        <div className="pl-[20px] customxs:pl-[50px] pr-[20px] customxs:pr-[65px] 2xl:pt-[190px] md:pt-[0] mt-[0] md:mt-0">
          <div className="relative">
            <Image
              src="/logo.svg"
              width="539"
              height="155"
              alt="discover"
              objectPosition="center"
              className="object-cover 3xl:max-w-[539px] md:max-w-[390px] max-w-[220px] 2xl:ml-[auto] mx-[auto] md:mb-[12px] mb-[8px]"
            />

            <h1 className="md:leading-[30px] leading-[14px] md:text-[21px] text-[14px] font-[700] font-machina 2xl:max-w-[310px] md:max-w-[390px] max-w-[220px] 2xl:w-[310px] md:w-[390px] 3xl:mr-[57px] md:float-right md:mx-[0] mx-[auto] text-right">
              Discover, Connect, Excel.
            </h1>
          </div>
        </div>

        <div className="px-[20px] 2xl:px-[50px] md:px-[0] 2xl:mt-[0] md:mt-[119px] mt-[106px] md:3xl:pl-[84px] 2xl:pl-[54px] my-auto flex flex-col gap-[20px] font-[400] leading-[20px] text-base max-w-[809px]">
          <p>
            Step into the future of industrial B2B procurement with YVOO
            SourcerPro+. Our powerful platform is specifically designed to meet
            the sourcing needs of businesses in various<pre></pre>
            <Link className="cursor-pointer underline" href={"/industries"}>
              industries
            </Link>{" "}
            now. Whether you&apos;re searching for reliable suppliers or looking
            to expand your network,&nbsp;B2BSourcerPro+ is your go-to solution.
          </p>
          <h2 className="font-[800] text-[24px]">
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
            , you can swiftly identify and evaluate&nbsp;vendors worldwide,
            saving you time and effort.
          </p>
          <p>
            On-Site Supplier Readiness Check: Gain peace of mind with our
            comprehensive on-site supplier&nbsp;assessments. We go beyond
            surface-level information by conducting thorough evaluations to
            predict supplier readiness and ensure a remarkable audit success
            rate.
          </p>
          <p>
            Seamless Connection: Connect directly with suppliers and establish
            fruitful business relationships.&nbsp;YVOO SourcerPro+ facilitates
            smooth communication and collaboration,
            enabling&nbsp;successful&nbsp;
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
            procurement efforts. Our platform&nbsp;empowersyou to optimize your
            supply chain, drive efficiency, and achieve your
            business&nbsp;goals.
          </p>
          <p>
            Join YVOO SourcerPro+ today and experience the game-changing
            benefits of our industrial&nbsp;supplier platform. Discover,
            connect, and excel like never before with our AI-powered&nbsp;search
            capabilities and on-site supplier readiness check.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
