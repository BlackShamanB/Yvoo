"use client";

import PostCard from "./Card";

const AllPosts = ({ posts }) => {
  return (
    <div className="flex flex-col pb-[70px] md:pb-[118px] 2xl:pb-[148px]">
      <div className="bg-[#414141] px-[20px] md:px-[50px] 2xl:px-[66px]">
        <h2 className="uppercase text-machina text-white text-[30px] md:text-[40px] 2xl:text-[50px] leading-[20px] md:leading-[40px] 2xl:leading-[50px] font-[800] py-[24px] 2xl:py-[46px]">
          Blog
        </h2>
      </div>
      <div className="px-[20px] md:px-[50px] 2xl:px-[66px] grid grid-cols-1 customxs:grid-cols-2 md2:grid-cols-3 2xl:grid-cols-4 gap-[28px] mt-[36px] md:mt-0">
        <div className="flex flex-col w-full customxs:justify-center gap-[20px] text-[#00D1EF] font-[700] text-[18px] md:text-[20px] 2xl:text-[24px] leading-[18px] md:leading-[20px] 2xl:leading-[24px]">
          <p>
            Entrepreneur seeks to inspire,
            <br /> inform and celebrate
            <br /> entrepreneurs.
          </p>
          <p>
            We offer real solutions to the
            <br /> challenges you face as an
            <br />
            entrepreneur, including tips,
            <br /> tools, and insider news to
            <br /> help build - and grow - your
            <br /> business.
          </p>
        </div>
        {posts?.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default AllPosts;
