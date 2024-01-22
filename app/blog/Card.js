import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/components/lib/sanityUtils";
import { format, parseISO } from "date-fns";

const Card = ({ post }) => {
  const dateFormat = "LLL dd, yyyy";
  return (
    <div className="hover:scale-[1.02] cursor-pointer relative max-w-[320px] xl:max-w-[418px] h-[320px] md:h-[418px] bg-black text-white px-[20px] py-[26px] flex">
      <Image
        quality={100}
        fill
        style={{ objectFit: "cover" }}
        src={urlFor(post.image).width(500).url()}
        alt={`${post.title} main image`}
      />
      <div className="w-full realtive flex justify-between items-end z-[100] flex-nowrap customxs:flex-wrap md:flex-nowrap">
        <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
          <h3 className="text-[20px] leading-[20px] font-[700] max-w-[278px] md:text-[24px] md:leading-[24px] ">
            {post.title}
          </h3>
          {/* <p>{post.description}</p> */}
        </Link>
        <div className="flex flex-col gap-[8px] text-[16px] leading-[16px] font-[400] items-end customxs:items-start md:items-end">
          <Image
            src={urlFor(post.authorImage).width(500).url()}
            width={48}
            height={48}
            alt="author"
          />
          <p className="name">{`${post.authorName}`}</p>
          <p className="text-right">
            {post._createdAt
              ? format(parseISO(post._createdAt), dateFormat)
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
