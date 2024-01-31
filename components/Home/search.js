import Image from "next/image";
import Link from "next/link";

function Search({ handleModal }) {
  return (
    <div
      id="search"
      className="relative grid w-full bg-local bg-contain bg-bottom absolute inset-0 bg-mint" >
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto]" data-scroll data-scroll-speed="0.1">
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-no-repeat bg-bottom z-30">
          <Image
            style={{ zIndex: 0 }}
            src="/images/discover.webp"
            width={900}
            height={654}
            alt="yvoo-search"
            className="absolute 2xl:bottom-[0px] md:bottom-[unset] 2xl:top-[unset] md:top-[186px] top-[211px] 3xl:left-[0] 2xl:left-[-114px] md:left-[-61px] z-10 3xl:max-w-[900px] 2xl:max-w-[774px] md:max-w-[659px] max-w-[89%]"
          />
          <Image
            src="/icons/squares-1.png"
            width={80}
            height={90}
            alt="triangle"
            className="absolute -top-[59px] 3xl:left-[22%] 2xl:left-[20.5%] mouse-parallax 2xl:block hidden"
          />

          <div
            style={{
              position: "relative",
              transform: "translateZ(-1px)",
              transformStyle: "preserve-3d",
            }}
            className="md:flex-center flex-col"
          >
            <div className="md:relative z-30 flex flex-wrap flex-col items-start 2xl:gap-[30px] md:gap-[20px] gap-[12px] 3xl:mt-[106px] 2xl:mt-[120px] mt-[115px] 3xl:mb-[442px] 2xl:mb-[350px] 2xl:leading-[50px] md:px-[0] px-[41px]">
              <h1 className="uppercase font-machina font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] max-w-[318px] 2xl:max-w-[438px] 3xl:ml-[145px] 2xl:ml-[0]">
                YVOO Search<b className="text-black">Pro+</b>
              </h1>
              <div className="flex flex-col 2xl:gap-[42px] md:gap-[28px] gap-[24px] 2xl:max-w-[438px] 3xl:ml-[145px] 2xl:ml-[0]">
                <p className="font-[700] text-black 2xl:text-[24px] text-[20px] 2xl:leading-[30px] leading-[26px] 2xl:max-w-[260px] max-w-[293px]">
                  Discover Quality Suppliers Effortlessly
                </p>

                <button className="filled_btn " onClick={handleModal}>
                  Request demo
                </button>
              </div>
            </div>
          </div>
          <div className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 md:mb-[120px] mb-[100px] 2xl:mb-0 md:mb-[120px] 2xl:mt-[96px] md:mt-[238px] mt-[113px] flex flex-col 2xl:gap-[20px] gap-[21px] font-[400] [&>p]:text-[14px] [&>p]:customxs:text-[16px] leading-[20px] 3xl:pl-[84px] 2xl:pl-[54px]">
            <Image
              style={{ zIndex: 0, transform: "translateZ(10px)" }}
              src="/icons/brain-1.svg"
              width={97}
              height={112}
              alt="yvoo-search"
              className="z-10 2lg:max-w-[96px] md:max-w-[97px] max-w-[69px] mb-[8px]"
            />
            <p>
              In today's fast-paced business world, finding reliable suppliers
              can&nbsp;be a daunting and time&#8209;consuming task. Manual
              searches and communication with suppliers worldwide
              often&nbsp;result in wasted resources and unsuitable options.
              However, there is a better way to&nbsp;streamline this process.
            </p>
            <p>
              Introducing YVOO, an AI-powered platform designed to revolutionize
              supplier sourcing. Say goodbye to the hassle and uncertainty of
              traditional methods and embrace a more efficient and effective
              solution.
            </p>
            <p>
              Here's why you should book a demo today{" "}
              <Link
                href="/solutions/#searchpro"
                className="cursor-pointer underline"
              >
                Services
              </Link>
            </p>
            <p>
              Join YVOO Today and Revolutionize Your{" "}
              <span
                className="underline"
                onClick={() => {
                  window.open("https://searchpro.yvoo.io/login", "_blank");
                }}
              >
                Procurement Process
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
