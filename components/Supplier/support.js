function Support() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-[20px] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[48px] md:py-[64px] 2xl:py-[86px] bg-white">
      <div className="[&>*]:text-black flex flex-col gap-[20px]">
        <h2 className="font-[700] text-[24px] leading-[24px]">
          Contact Support for Further Assistance:
        </h2>
        <p className="font-[400] text-[16px] leading-[16px] md:mb-6">
          If you have any questions or concerns regarding the safety and
          security of your data on YVOO SALESPRO+ , please don't hesitate to
          contact our platform{" "}
          <a className="underline" href="mailto:contact@yvoo.io">
            support team
          </a>
          . We are here to assist you and address any inquiries you may have.
        </p>
      </div>
      <div className="[&>*]:text-black flex flex-col gap-[20px]">
        <h2 className="font-[700] text-[24px] leading-[24px] mb-[20px]"></h2>
        <p className="font-[400] text-[16px] leading-[16px] md:mb-6">
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
