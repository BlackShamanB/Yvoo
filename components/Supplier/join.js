"use client";

function Join() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full 3xl:gap-[171px] 2xl:gap-[110px] gap-[40px] px-[41px] customxs:px-[50px] 2xl:px-[162px] 3xl:px-[201px] md:pt-[180px] pt-[120px] md:pb-[122px] pb-[80px] md:bg-supplier2Bg3xl bg-supplier2Bg bg-no-repeat 2xl:bg-left bg-right-top mix-blend-screen">
      <div className="flex flex-col gap-[20px]">
        <h1 className="font-inter 2xl:text-[50px] text-[30px] md:leading-[58px] leading-[34px] font-[700] max-w-[880px]"
          data-scroll
          data-scroll-speed="0.15">
          Join YVOO 
          Sales<b className="text-mint">Pro+</b>
        </h1>
      </div>
      <div className="flex flex-col 2xl:gap-[47px] gap-[32px]">
        <p className="font-[700] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] leading-[26px] customxs:max-w-[665px] md:max-w-none"
          data-scroll
          data-scroll-speed="0.2">
          Join YVOO SALESPRO+ today and experience a safe and secure platform
          that prioritizes your data security. Connect with potential customers
          with confidence, knowing that your information is protected. Register
          now to get started.
        </p>
        <button
          type="submit"
          className="rounded-[30px] filled_btn_primary btn_animated_blue hover:!text-black !text-[#06D7F9] md:!p-[18px_62px] !p-[14px_32px] !w-[max-content] md:!text-[16px] !text-[12px] md:!leading-[20px] !leading-[16px]"
          onClick={() => {
            window.open("https://searchpro.yvoo.io", "_blank");
          }}
          data-scroll
          data-scroll-speed="0.1"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
}

export default Join;
