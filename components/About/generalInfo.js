import Image from "next/image";
function GeneralInfo() {
  return (
    <div className="relative flex flex-wrap md:flex-nowrap 3xl:gap-[170px] gap-[110px] w-full px-[20px] 2xl:px-[162px] 3xl:px-[202px] py-[36px] md:py-[52px] 2xl:py-[103px] 3xl:py-[101px] 2xl:pb-[80px] pb-[76px] 2xl:pb-[100px] bg-[#131D2A]">
      <Image
        src="/icons/about_ellipse.svg"
        width={369}
        height={276}
        alt="triangle"
        className="absolute 2xl:top-[-35.5%] top-[18%] 2xl:left-[0%] left-[-62%] z-[1] 3xl:max-w-[265px] 2xl:max-w-[212px] max-h-[276px]"
      />
      <div className="font-[400] text-[16px] leading-[20px] flex-1 basis-[500px]">
        <h1 className="!text-[24px] !leading-[24px] md:!text-[32px] md:!leading-[32px] font-[700] text-[#00D1EF] mb-[43px]">
          General Information
        </h1>
        <p>
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
      <div className="font-[400] text-[16px] leading-[20px] flex-1 basis-[500px]">
        <h1 className="!text-[24px] !leading-[24px] md:!text-[32px] md:!leading-[32px] font-[700] text-[#00D1EF] mb-[43px]">
          YVOO Technologies
        </h1>
        <p>
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
