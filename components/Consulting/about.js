import Image from "next/image";

function About() {
  return (
    <div className="relative flex flex-col gap-[30px] md:gap-[46px] 2xl:gap-[86px] w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[60px] md:py-[66px] 2xl:py-[84px] pb-[92px] 2xl:pb-[182px] bg-white">
      <Image
        src="/icons/yvoo-sales-icon.svg"
        width={0}
        height={0}
        alt="yvoo-sales"
        sizes="100vw"
        style={{ width: "124px", height: "137px" }}
        className="hidden md:block absolute -top-[4%] right-[6%] md:-top-[44px] md:right-[28%] 2xl:right-[32%]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md2:grid-cols-3 gap-[38px]">
        <h1 className="font-machina uppercase text-black font-[800] text-[30px] md:text-[40px] leading-[30px] md:leading-[40px]">
          About us
        </h1>

        <div className="col-span-2 flex flex-col gap-4">
          <p className="text-black font-[700] text-[18px] leading-[18px] md:text-[24px] md:leading-[24px] max-w-[566px] md:max-w-none">
            At YVOO Technology, we take a data-driven approach to procurement
            consulting, leveraging cutting-edge analytics tools and techniques
            to uncover insights and identify opportunities for improvement.
          </p>
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            Our team has extensive experience working with businesses across a
            range of industries, and we bring a wealth of knowledge and best
            practices to every engagement.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 customxs:grid-cols-2 md:grid-cols-5 gap-[46px]">
        <div className="w-full max-w-[268px] pl-[26px] pb-[26px] border-l-2 border-[#06D6F8]">
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            Experienced consultants with a deep understanding of the procurement
            landscape
          </p>
        </div>
        <div className="w-full max-w-[268px] pl-[26px] pb-[26px] border-l-2 border-[#06D6F8]">
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            Customized solutions tailored to meet the unique needs of each
            client
          </p>
        </div>
        <div className="w-full max-w-[268px] pl-[26px] pb-[26px] border-l-2 border-[#06D6F8]">
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            Data-driven approach using cutting-edge analytics tools and
            techniques
          </p>
        </div>
        <div className="w-full max-w-[268px] pl-[26px] pb-[26px] border-l-2 border-[#06D6F8]">
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            Extensive experience working with businesses across a range of
            industries
          </p>
        </div>
        <div className="w-full max-w-[268px] pl-[26px] pb-[26px] border-l-2 border-[#06D6F8]">
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            We bring a wealth of knowledge and best practices to every
            engagement
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
