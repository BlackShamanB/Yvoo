import Image from "next/image";

function Why() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full">
      <Image
        src="/icons/why-become-cross.svg"
        width={0}
        height={0}
        alt="why-become"
        sizes="100vw"
        style={{ width: "147px", height: "157px" }}
        className="absolute top-[18%] right-[6%] md:-top-[44px] md:right-[28%] 2xl:right-[32%]"
      />
      <div className="flex items-center px-[20px] customxs:pl-[50px] lg:pl-[176px] 2xl:pl-[202px] py-[40px] md:py-[60px] 2xl:py-[79px] w-full bg-white">
        <h1 className="w-full text-black font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
          Why Become <br />
          an YVOO Agent?
        </h1>
      </div>
      <div className="px-[20px] customxs:px-[50px] w-full bg-[#FF490F]">
        <div className="md:ml-[56px] 2xl:ml-[98px] my-[70px] md:my-[108px] max-w-[660px] flex flex-col gap-4">
          <ul className="pl-[20px] list-disc list-outside">
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
      </div>
    </div>
  );
}

export default Why;
