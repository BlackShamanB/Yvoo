import Image from "next/image";
import ImgLeftToRight from "../ImgLeftToRight"

function ScanPro() {
  return (
    <div
      id="scanpro"
      className="relative w-full flex justify-between flex-wrap md:gap-[32px] px-[20px] 
      2xl:px-[202px] md:px-[85px] px-[41px]
      pt-[287px] pb-[76px]
      md:pt-[420px] md:pb-[76px]
      2xl:pt-[183px] 2xl:pb-[298px] 
      3xl:pt-[179px] 3xl:pb-[319px] bg-solution2Bg md:bg-solution2Bgmd md2:bg-solution2Bg2xl 2xl:bg-left-bottom bg-cover bg-no-repeat"
    >
      <ImgLeftToRight
        src="/icons/icon-line.svg"
        width={584}
        height={106}
        alt="line"
        classesImg="md:max-w-[unset] max-w-[217px]"
        classesContainer="absolute overflow-hidden 3xl:top-[-18%] 2xl:top-[-28%] md:top-[-56.9%] top-[-45%] 3xl:left-[78%] 2xl:left-[75%] md:left-[59%] left-[40%] z-[1]"
        data-scroll
        data-scroll-speed="0.13"
      />
      <Image
        src="/icons/ellipse.svg"
        width={584}
        height={106}
        alt="ellipse"
        className="absolute 3xl:top-[19%] 2xl:top-[8%] md:top-[39.5%] top-[-143%] 2xl:left-[88.4%] md:left-[-78%] left-[73%] md:max-w-[220px] max-w-[164px] mouse-parallax z-[1]"
        data-scroll
        data-scroll-speed="0.2"
      />
      <div
        className="w-full 3xl:max-w-[673px] 2xl:max-w-[463px] ml-[auto]"
        data-scroll
        data-scroll-speed="0.15"
      >
        <h1 className="2xl:mb-[31px] md:mb-[21px] mb-[15px] max-w-[214px] font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[50px]">
          YVOO <b className="text-[#53D3AA] font-[800]">Scan</b>
          Pro+
        </h1>
        <h2 className="2xl:mb-[22px] md:mb-[16px] mb-[20px] max-w-[340px] font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
          Experience Effortless Supplier Readiness Checks{" "}
        </h2>
        <p className="font-[400] md:text-[16px] text-[14px] leading-[20px] mb-6 3xl:max-w-[584px]">
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
