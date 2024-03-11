import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/components/lib/sanityUtils";
import { format, parseISO } from "date-fns";
import React, { useState } from 'react';

const Card = ({ post }) => {
  const dateFormat = "LLL dd, yyyy";
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div className="overflow-hidden cursor-pointer relative mx-[auto] min-w-[336px] 2xl:min-w-[unset] max-w-[336px] md:max-w-[354px] 2xl:max-w-[432px] 3xl:max-w-[438px] h-[322px] md:h-[339px] 2xl:h-[414px] 3xl:h-[420px] w-[100%] bg-black text-white px-[20px] py-[26px] flex"
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}>
      <Image
        quality={100}
        fill
        style={{ objectFit: "cover", transform: isHovered ? 'scale(1.02)' : '' }}
        src={urlFor(post.image).width(500).url()}
        alt={`${post.title} main image`}
        className="blog-img"
      />
      <div className="w-full realtive flex flex-col justify-between z-[100] flex-nowrap customxs:flex-wrap md:flex-nowrap">
        <div className="flex flex-row gap-[8px] text-[16px] leading-[16px] font-[400]">
          <Image
            src={urlFor(post.authorImage).width(500).url()}
            className="rounded-full"
            width={48}
            height={48}
            alt="author"
          />
          <div>
            <p className="name text-[16px] font-[700] leading-[29px]">{`${post.authorName}`}</p>
            <p className="text-right leading-[20px]">
              {post._createdAt
                ? format(parseISO(post._createdAt), dateFormat)
                : ""}
            </p>
          </div>
        </div>
        <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
          <h3 className="text-[20px] leading-[20px] font-[700] min-h-[120px] md:text-[24px] md:leading-[24px] ">
            {post.title}
          </h3>
          {/* <p>{post.description}</p> */}
        </Link>
      </div>
    </div>
  );
};

export default Card;
