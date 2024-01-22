import Image from "next/image";

function ScanPro() {
  return (
    <div
      id="scanpro"
      className="relative w-full h-[620px] flex justify-between flex-wrap md:gap-[32px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[127px] md:py-[141px] 2xl:py-[120px] bg-worldBgsm xs:bg-worldBgmd md:bg-worldBg"
    >
      <Image
        src="/icons/location-pin-icon.svg"
        width={0}
        height={0}
        alt="location"
        sizes="100vw"
        style={{ width: "200px", height: "240px" }}
        className="absolute -top-[10%] right-0 xs:-top-[44px] xs:right-[6%] md:-top-[50px] md:right-[22%] 2xl:right-[42%]"
      />
      <div className="w-full max-w-[584px]">
        <h1 className="mb-6 max-w-[214px] font-machina font-[800] uppercase text-[30px] md:text-[36px] 2xl:text-[50px] leading-[30px] md:leading-[36px] 2xl:leading-[50px]">
          YVOO <b className="text-[#53D3AA]">Scan</b>
          Pro+
        </h1>
        <h2 className="mb-8 max-w-[340px] font-[700] text-[24px] leading-[24px]">
          Experience Effortless Supplier Readiness Checks{" "}
        </h2>
        <p className="font-[500] text-[16px] leading-[16px] mb-6">
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
