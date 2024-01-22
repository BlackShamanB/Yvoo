import Image from "next/image";

function ExceptionalValue() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-full">
      <div className="relative pl-[20px] customxs:pl-[50px] xl:pl-[176px] 2xl:pl-[202px] py-[40px] md:py-[60px] 2xl:py-[79px] w-full bg-white flex items-center">
        <h1 className="break-all text-black font-machina font-[800] uppercase text-[30px] 2xl:text-[40px] leading-[30px] 2xl:leading-[50px]">
          Exceptional <br />
          Value
        </h1>
        <Image
          src="/icons/exceptionalIcon.png"
          width={0}
          height={0}
          alt="exceptional"
          sizes="100vw"
          style={{ width: "141px", height: "187px" }}
          className="hidden md:block absolute md:-right-[20%] md2:-right-[10%] 2xl:-right-[8%] top-[66%] transform -translate-y-1/2"
        />
      </div>
      <div className="col-span-2 px-[20px] customxs:px-[50px] w-full bg-[#06D7F9] flex items-center">
        <div className="md:ml-[56px] 2xl:ml-[98px] my-[70px] md:my-[82px] flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px] text-black">
            Our offerings include a range of procurement consulting services
            designed to help businesses optimize their procurement operations
            and achieve sustainable success.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ExceptionalValue;
