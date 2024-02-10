import Image from "next/image";

function ScanPro() {
  return (
    <div
      id="scanpro"
      className="relative w-full flex justify-between flex-wrap md:gap-[32px] px-[20px] 
      2xl:px-[202px] md:px-[85px]
      md:pt-[420px] md:pb-[76px]
      2xl:pt-[183px] 2xl:pb-[298px] 
      3xl:pt-[179px] 3xl:pb-[319px] bg-solution2Bg md:bg-solution2Bgmd 2xl:bg-solution2Bg2xl 2xl:bg-left-bottom	 bg-no-repeat"
    >
      {/* <Image
        src="/icons/location-pin-icon.svg"
        width={0}
        height={0}
        alt="location"
        sizes="100vw"
        style={{ width: "200px", height: "240px" }}
        className="absolute -top-[10%] right-0 xs:-top-[44px] xs:right-[6%] md:-top-[50px] md:right-[22%] 2xl:right-[42%]"
      /> */}
      <Image
        src="/icons/icon-line.svg"
        width={584}
        height={106}
        alt="triangle"
        className="absolute 3xl:top-[-18%] 2xl:top-[-28%] md:top-[39.5%] top-[23.9%] 3xl:left-[78%] 2xl:left-[75%] left-[57%] mouse-parallax z-[1]"
      />
      <Image
        src="/icons/ellipse.svg"
        width={584}
        height={106}
        alt="triangle"
        className="absolute 3xl:top-[19%] 2xl:top-[8%] md:top-[39.5%] top-[23.9%] 2xl:left-[88.4%] md:left-[-78%] left-[57%] max-w-[220px] mouse-parallax z-[1]"
      />
      {/* <div className="w-100"></div> */}
      <div className="w-full 3xl:max-w-[673px] 2xl:max-w-[463px]">
        <h1 className="2xl:mb-[31px] mb-[21px] max-w-[214px] font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[44px] 2xl:leading-[50px]">
          YVOO <b className="text-[#53D3AA]">Scan</b>
          Pro+
        </h1>
        <h2 className="2xl:mb-[22px] mb-[16px] max-w-[340px] font-[700] 2xl:text-[24px] text-[20px] 2xl:leading-[30px] leading-[26px]">
          Experience Effortless Supplier Readiness Checks{" "}
        </h2>
        <p className="font-[400] text-[16px] leading-[20px] mb-6 3xl:max-w-[584px]">
          Effortlessly conduct supplier readiness checks without the hassles of
          travel and logistics. Say goodbye to wasted resources and hello to a
          streamlined process with ScanPro+. Our revolutionary solution
          transforms the way you verify supplier readiness, saving you time,
          money, and headaches.
        </p>
      </div>
    </div>
  );
}

export default ScanPro;
