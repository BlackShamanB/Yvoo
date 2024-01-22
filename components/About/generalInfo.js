function GeneralInfo() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-[20px] w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[36px] md:py-[52px] 2xl:py-[68px] pb-[76px] 2xl:pb-[122px] bg-[#414141]">
      <div className="font-[400] text-[16px] leading-[19px] flex-1 basis-[500px]">
        <h1 className="!text-[24px] !leading-[24px] md:!text-[32px] md:!leading-[32px] font-[700] text-[#00D1EF] mb-[26px]">
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
      <div className="font-[400] text-[16px] leading-[19px] flex-1 basis-[500px]">
        <h1 className="!text-[24px] !leading-[24px] md:!text-[32px] md:!leading-[32px] font-[700] text-[#00D1EF] mb-[26px]">
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
