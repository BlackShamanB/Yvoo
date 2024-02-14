import Image from "next/image";

function Why() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full 2xl:max-h-[875px] z-[1]">
    <Image
      src="/icons/squares-2.png"
      width={96}
      height={106}
      alt="triangle"
      className="absolute 3xl:top-[11%] 2xl:top-[10%] md:top-[32px] top-[-32px] 3xl:left-[81%] 2xl:left-[20.4%] md:left-[22.4%] left-[23.2%] md:max-w-[unset] max-w-[44px] mouse-parallax z-[1]"
      // data-scroll
      // data-scroll-speed="-0.15"
    />
      <div className="relative flex px-[20px] 2xl:pl-[202px] 3xl:pb-[583px] py-[40px] md:py-[60px] 3xl:pt-[178px] w-full bg-white 2xl:max-h-[875px]">
        <h1 className="w-full text-black font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] z-[1]">
          Why Become <br />
          an YVOO Agent?
        </h1>
        <div className="absolute bg-mint w-[592px] h-[721px] top-[-82px] right-[12px]"></div>
      </div>
      <div className="px-[50px] w-full bg-white 2xl:max-h-[875px]">
        <div className="md:ml-[56px] 2xl:ml-[42px] my-[70px] md:my-[184px] max-w-[660px] flex flex-col gap-4">
          <ul className="text-black pl-[18px] list-disc list-outside md:text-[16px] text-[14px] md:leading-[30px] leading-[20px] font-[400]">
            <li>Flexible hours that suit your lifestyle</li>
            <li>Fast and reliable payment system</li>
            <li>Transparent terms and conditions</li>
            <li>
              No special requirements to meet - just your skills and dedication
            </li>
            <li>
              Minimal training required - we provide the tools you need to
              succeed
            </li>
            <li>Exposure to industry best practices</li>
            <li>Collaborate with top industry names</li>
            <li>Choose projects that align with your goals and interests</li>
          </ul>
        </div>
        <Image
              src="/images/forAuditors.png"
              alt="forAuditors"
              width={519}
              height={426}
              className="relative object-contain top-[-49px] left-[35px]"
            />
      </div>
    </div>
  );
}

export default Why;
