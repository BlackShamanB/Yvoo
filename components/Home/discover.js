import Image from "next/image";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";

function Discover() {
  return (
    <div className="relative grid w-full flex justify-center">
      <Image
        src="/icons/greenTriangle-1.png"
        width={116}
        height={139}
        alt="triangle"
        className="absolute 3xl:top-[20%] 2xl:top-[26%] md:top-[22%] top-[52%] 3xl:left-[15%] 2xl:left-[7%] md:left-[16%] left-[11%] mouse-parallax 2xl:max-w-[116px] max-w-[63px]"
        
        data-scroll data-scroll-speed="0.3"
      />
      <Image
        src="/icons/crosses-1.svg"
        width={101}
        height={113}
        alt="triangle"
        className="absolute 2xl:top-[548px] md:top-[35.6%] top-[62%] 2xl:left-[11%] md:left-[13%] left-[6%] mouse-parallax md:max-w-[101px] max-w-[63px]"
        
        data-scroll data-scroll-speed="0.2"
      />
      <Image
        src="/icons/arch-1.png"
        width={189}
        height={174}
        alt="triangle"
        className="absolute 2xl:top-[790px] md:top-[92.4%] top-[98.3%] 3xl:left-[60%] 2xl:left-[58.6%] md:left-[64.6%] left-[53%] mouse-parallax md:max-w-[180px] max-w-[127px] z-[1] md:block hidden"
        
        data-scroll data-scroll-speed="0.5"
      />
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative grid grid-cols-1 2xl:grid-cols-2 w-full mb-[100px] 3xl:mt-[232px] 2xl:mt-[200px] md:mt-[400px] sm:mt-[262px] mt-[787px] 3xl:mb-[391px] 2xl:mb-[424px] md:mb-[154px] mb-[0]"
        
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
          className="3xl:pr-[0] md:px-[0] px-[40px] 2xl:mt-[0] md:mt-[140px] mt-[120px] 3xl:pt-[114px] 2xl:pt-[110px] md:3xl:pl-[84px] 2xl:pl-[54px] my-auto flex flex-col font-[400] 2xl:text-[30px] md:text-[26px] text-[22px] 2xl:leading-[38px] md:leading-[32px] leading-[28px] max-w-[660px] font-inter"
          data-scroll
          data-scroll-speed="0.1"
        >
          <h2 className="font-[700] 2xl:text-[30px] md:text-[26px] text-[22px] 2xl:leading-[38px] md:leading-[32px] leading-[28px]">
            {" "}
            We're a global B2B platform, {" "}
          </h2>
          <p className="2xl:mb-[60px] mb-[40px] 3xl:pr-[100px]">offering on-the-ground expertise for worldwide supplier discovery and verification.</p>
          <p className="text-[#06D7F9] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] font-[700]">Think LinkedIn's power + Uber's user experience​​</p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
