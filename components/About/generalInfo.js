import Image from "next/image";
function GeneralInfo() {
  return (
    <div className="relative flex flex-wrap 3xl:gap-[170px] 2xl:gap-[110px] gap-[60px] w-full px-[41px] 2xl:px-[162px] 3xl:px-[202px] py-[100px] 2xl:py-[103px] 3xl:py-[101px] pb-[100px] 2xl:pb-[80px] 3xl:pb-[100px] bg-[#131D2A]">
      <Image
        src="/icons/about_ellipse.svg"
        width={369}
        height={276}
        alt="ellipse"
        className="absolute 2xl:top-[-35.5%] top-[18%] 2xl:left-[0%] left-[-62%] z-[1] 3xl:max-w-[265px] 2xl:max-w-[212px] max-h-[276px] 2xl:block hidden"
        data-scroll
        data-scroll-speed="0.2"
      />
      <div className="font-[400] text-[16px] leading-[20px] flex-1 basis-[500px]"
          data-scroll
          data-scroll-speed="0.15">
        <h1 className="!text-[26px] !leading-[30px] 2xl:!text-[32px] 2xl:!leading-[32px] font-[700] text-[#00D1EF] 2xl:mb-[43px] mb-[24px]">
          General Information
        </h1>
        <p className="2xl:text-[16px] text-[14px] leadimg-[20px]">
          YVOO Technologies d.o.o
          <br />
          Address:
          <br />
          Ulica Vjekoslava Novotnija 12
          <br />
          Zagreb HR-10000
          <br />
          Croatia
          <br />
          Contact:{" "}
          <a className="text-[#06d7f9]" href="mailto:contact@yvoo.io">
            contact@yvoo.io
          </a>
        </p>
      </div>
      <div className="font-[400] text-[16px] leading-[20px] flex-1 basis-[500px]"
          data-scroll
          data-scroll-speed="0.25">
        <h1 className="!text-[26px] !leading-[30px] 2xl:!text-[32px] 2xl:!leading-[32px] font-[700] text-[#00D1EF] 2xl:mb-[43px] mb-[24px]">
          YVOO Technologies
        </h1>
        <p className="2xl:text-[16px] text-[14px] leadimg-[20px]">
          PIN 11406548089
          <br />
          Reg. ID 081403239
          <br />
          Reg. in commercial court in Zagreb under NO.
          <br />
          Tt-21/46365-2
          <br />
          Owners/Founders: Ivo Brandić, Stanislav Ivanov
          <br />
          Authorised responsible and representative person: Ivo Brandić
          <br />
          Company initial share capital 20 000 HRK / 2654,46 EUR, paid in full
        </p>
      </div>
    </div>
  );
}

export default GeneralInfo;
