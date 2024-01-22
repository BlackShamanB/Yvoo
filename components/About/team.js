function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[40px] md:py-[60px] 2xl:py-[79px] w-full bg-[#F6F6F6]">
        <h1 className="text-black font-machina font-[800] uppercase text-[30px] md:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[50px]">
          Our <br />
          Executive <br />
          Team
        </h1>
      </div>
      <div className="px-[20px] customxs:px-[50px] w-full bg-[#06D7F9]">
        <div className="md:ml-[56px] 2xl:ml-[98px] my-[70px] md:my-[79px] max-w-[444px] flex flex-col gap-4">
          <h1 className="font-[700] text-[24px] leading-[24px] text-black">
            Expertise Meets Innovation: Combining Procurement Know-How with
            Digital Transformation and AI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Team;
