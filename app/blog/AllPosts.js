"use client";

import PostCard from "./Card";

const AllPosts = ({ posts }) => {
  return (
    <div className="flex flex-col pb-[101px] md:pb-[182px] 2xl:pb-[181px] 3xl:bg-blogBg3xl 2xl:bg-blogBg2xl md:bg-blogBgmd bg-blogBg bg-no-repeat bg-right-top">
      <div className="flex flex-col px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] pt-[120px] md:pt-[156px] 2xl:pt-[162px] pb-[120px] md:pb-[111px] 2xl:pb-[105px] 3xl:pb-[168px] 2xl:gap-[42px] md:gap-[45px] gap-[20px]">
        <h2 className="font-inter text-[30px] md:text-[50px] 2xl:text-[60px] leading-[34px] md:leading-[54px] 2xl:leading-[68px] font-[700]">
          Blog
        </h2>
        <div className="flex flex-col w-full customxs:justify-center 2xl:gap-[30px] gap-[28px] text-white font-[700] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[27px] leading-[26px] 3xl:max-w-[746px] 2xl:max-w-[432px]">
          <p>
            Entrepreneur seeks to inspire, inform and celebrate entrepreneurs.
          </p>
          <p>
            We offer real solutions to the challenges you face as an entrepreneur, including tips, tools, and insider news to help build - and grow - your business.
          </p>
        </div>
      </div>
      <div className="px-[12px] md:px-[24px] 2xl:px-[48px] grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 2xl:gap-[24px] gap-[12px]">
        {posts?.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default AllPosts;
