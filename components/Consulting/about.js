import Image from "next/image";

function About() {
  return (
    <div className="relative flex flex-col gap-[80px] md:gap-[60px] 2xl:gap-[115px] 3xl:gap-[166px] w-full px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] py-[98px] md:py-[135px] 2xl:py-[153px] pb-[120px] md:pb-[140px] 2xl:pb-[160px] 3xl:pb-[219px] bg-white">
      <Image
        src="/icons/greenTriangle-1.png"
        width={116}
        height={139}
        alt="triangle"
        className="absolute 3xl:top-[-11%] 2xl:top-[-12%] md:top-[-8.5%] top-[-3.5%] 3xl:left-[31.8%] 2xl:left-[48%] md:left-[58%] left-[54%] mouse-parallax md:max-w-[116px] max-w-[67px]"
        
        data-scroll
        data-scroll-speed="0.13"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:gap-[332px] 2xl:gap-[100px] md:gap-[57px] gap-[54px]">
        <h1
          className="font-machina uppercase text-black text-[30px] md:text-[40px] 2xl:text-[50px] font-[800] leading-[34px] md:leading-[44px] 2xl:leading-[54px]"
          data-scroll
          data-scroll-speed="0.12"
        >
          About us
        </h1>

        <div
          className="col-span-2 flex flex-col 2xl:gap-[23px] gap-[16px] pt-[8px] 3xl:pl-[0] 2xl:pl-[50px]"
          data-scroll
          data-scroll-speed="0.13"
        >
          <p
            className="text-black font-[700] text-[16px] md:text-[20px] 2xl:text-[24px] leading-[20px] md:leading-[24px] 2xl:leading-[30px] max-w-[566px] md:max-w-none"
            data-scroll
            data-scroll-speed="0.02"
          >
            At YVOO Technology, we take a data-driven approach to procurement
            consulting, leveraging cutting-edge analytics tools and techniques
            to uncover insights and identify opportunities for improvement.
          </p>
          <p
            className="text-black leading-[20px] md:text-[16px] text-[14px] font-[400]"
            data-scroll
            data-scroll-speed="0.015"
          >
            Our team has extensive experience working with businesses across a
            range of industries, and we bring a wealth of knowledge and best
            practices to every engagement.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 md:gap-[24px] 2xl:gap-y-[24px] md:gap-y-[30px] gap-[40px]">
        <div
          className="w-full md:max-w-[268px] max-w-[250px] pl-[24px] md:pl-[18px] 3xl:pl-[24px] 3xl:pb-[26px] border-l-2 border-[#06D6F8]"
          data-scroll
          data-scroll-speed="0.2"
        >
          <p className="text-black leading-[20px] md:text-[16px] text-[14px] font-[400]">
            Experienced consultants with a deep understanding of the procurement
            landscape
          </p>
        </div>
        <div
          className="w-full md:max-w-[268px] max-w-[250px] pl-[24px] md:pl-[18px] 3xl:pl-[24px] 3xl:pb-[26px] border-l-2 border-[#06D6F8]"
          data-scroll
          data-scroll-speed="0.13"
        >
          <p className="text-black leading-[20px] md:text-[16px] text-[14px] font-[400]">
            Customized solutions tailored to meet the unique needs of each
            client
          </p>
        </div>
        <div
          className="w-full md:max-w-[268px] max-w-[250px] pl-[24px] md:pl-[18px] 3xl:pl-[24px] 3xl:pb-[26px] border-l-2 border-[#06D6F8]"
          data-scroll
          data-scroll-speed="0.18"
        >
          <p className="text-black leading-[20px] md:text-[16px] text-[14px] font-[400]">
            Data-driven approach using cutting-edge analytics tools and
            techniques
          </p>
        </div>
        <div
          className="w-full md:max-w-[268px] max-w-[250px] pl-[24px] md:pl-[18px] 3xl:pl-[24px] 3xl:pb-[26px] border-l-2 border-[#06D6F8]"
          data-scroll
          data-scroll-speed="0.11"
        >
          <p className="text-black leading-[20px] md:text-[16px] text-[14px] font-[400]">
            Extensive experience working with businesses across a range of
            industries
          </p>
        </div>
        <div
          className="w-full md:max-w-[268px] max-w-[250px] pl-[24px] md:pl-[18px] 3xl:pl-[24px] 3xl:pb-[26px] border-l-2 border-[#06D6F8]"
          data-scroll
          data-scroll-speed="0.14"
        >
          <p className="text-black leading-[20px] md:text-[16px] text-[14px] font-[400]">
            We bring a wealth of knowledge and best practices to every
            engagement
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
