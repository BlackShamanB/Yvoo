function Support() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[168px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] pt-[48px] md:pt-[64px] 2xl:pt-[66px] pb-[115px] bg-white relative top-[-1px]">
      <div className="[&>*]:text-black flex flex-col gap-[24px]">
        <h2 className="font-[700] 2xl:text-[24px] text-[16px] 2xl:leading-[30px] leading-[20px]">
          Contact Support for Further Assistance:
        </h2>
        <p className="font-[400] md:text-[16px] text-[14px] leading-[20px] md:mb-6">
          If you have any questions or concerns regarding the safety and
          security of your data on YVOO SALESPRO+ , please don't hesitate to
          contact our platform{" "}
          <a className="underline" href="mailto:contact@yvoo.io">
            support team
          </a>
          . We are here to assist you and address any inquiries you may have.
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col gap-[24px]">
        <h2 className="font-[700] 2xl:text-[24px] text-[16px] 2xl:leading-[30px] leading-[20px] mb-[29px]"></h2>
        <p className="font-[400] md:text-[16px] text-[14px] leading-[20px] md:mb-6">
          For More Information: To learn more about our policies and practices,
          please refer to our General Terms. We provide detailed information
          about how we protect your data and ensure a secure environment for
          your business interactions.
        </p>
      </div>
    </div>
  );
}

export default Support;
