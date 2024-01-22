function OfferingsList() {
  return (
    <div className="w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[42px] md:py-[46px] 2xl:py-[64px] pb-[64px] 2xl:pb-[122px] bg-[#F6F6F6]">
      <div className="grid grid-cols-1 customxs:grid-cols-2 md2:grid-cols-4 gap-[46px]">
        <div className="w-full max-w-[284px] flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px] text-black">
            Procurement
            <br /> strategy
            <br /> development:
          </h1>
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            We work closely with our clients to develop comprehensive
            procurement strategies that align with their business goals and
            objectives.
          </p>
        </div>
        <div className="w-full max-w-[284px] flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px] text-black">
            Supplier
            <br /> management:
          </h1>
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            We help our clients optimize their supplier relationships,
            identifying opportunities to reduce costs, improve quality, and
            enhance collaboration.
          </p>
        </div>
        <div className="w-full max-w-[284px] flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px] text-black">
            Procurement
            <br /> technology:
          </h1>
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            We assist our clients in selecting and implementing procurement
            technology solutions that drive efficiency and cost savings
          </p>
        </div>
        <div className="w-full max-w-[284px] flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px] text-black">
            Procurement
            <br /> process
            <br /> improvement:
          </h1>
          <p className="text-black leading-[16px] text-[16px] font-[400]">
            We help our clients streamline their procurement processes,
            identifying areas for improvement and implementing best practices to
            optimize efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferingsList;
