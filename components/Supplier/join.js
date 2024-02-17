"use client";

function Join() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[171px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[201px] pt-[56px] md:pt-[72px] 2xl:pt-[181px] pb-[76px] md:pb-[100px] 2xl:pb-[122px] bg-supplier2Bg 2xl:bg-supplier2Bg2xl 3xl:bg-supplier2Bg3xl">
      <div className="flex flex-col gap-[20px]">
        <h1 className="uppercase font-machina text-[30px] md:text-[40px] 2xl:text-[50px] leading-[34px] md:leading-[44px] 2xl:leading-[54px] font-[800] max-w-[880px]">
          Join <b className="text-[#06D7F9]">YVOO 
          <br /> SALE</b>SPRO+
        </h1>
      </div>
      <div className="flex flex-col gap-[47px]">
        <p className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] customxs:max-w-[665px] md:max-w-none">
          Join YVOO SALESPRO+ today and experience a safe and secure platform
          that prioritizes your data security. Connect with potential customers
          with confidence, knowing that your information is protected. Register
          now to get started.
        </p>
        <button
          type="submit"
          className="filled_btn_primary !text-[#06D7F9] !p-[18px_62px] !w-[max-content] !leading-[20px]"
          onClick={() => {
            window.open("https://searchpro.yvoo.io", "_blank");
          }}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Join;
