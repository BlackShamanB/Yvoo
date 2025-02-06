"use client";

import Image from "next/image";
import Link from "next/link";

import { PortableText } from "@portabletext/react";
import { urlFor } from "@/components/lib/sanityUtils";
import { format, parseISO } from "date-fns";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).fit("max").auto("format")}
          style={{ marginBottom: "24px" }}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const {
    title,
    image,
    publishedAt,
    _updatedAt,
    _createdAt,
    authorImage,
    authorName,
    body = [],
  } = post;

  let dateString = "";
  let dateFormat = "LLL dd, yyyy, HH:mm";

  if (_updatedAt) {
    dateString = `updated on ${format(parseISO(_updatedAt), dateFormat)}`;
  } else if (publishedAt) {
    dateString = `published on ${format(parseISO(publishedAt), dateFormat)}`;
  } else {
    dateString = `created on ${format(parseISO(_createdAt), dateFormat)}`;
  }

  return (
    <div className="bg-white flex justify-center md:pt-[74px] pt-[58px] md:pb-[164px] pb-[120px]">
      <div className="3xl:max-w-[1207px] 2xl:max-w-[888px] md:max-w-[720px] md:mx-[20px] md:px-[0] px-[12px]">
        <h1 className="text-black 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] font-[800] 2xl:mb-[50px] md:mb-[40px] mb-[24px] uppercase font-inter">
          {title}
        </h1>
        <div className="flex items-center md:mb-[26px] mb-[29px] md:flex-nowrap flex-wrap">
          <div className="flex items-center gap-[20px] text-[16px] leading-[20px] font-[400] md:mb-[0] mb-[24px]">
          <Image
            src={urlFor(authorImage).width(60).url()}
            alt={`${authorName} author`}
            width={52}
            height={52}
            className="rounded-[50%] min-w-[52px] min-h-[52px] max-w-[52px] max-h-[52px]"
          />
          <p className="text-black md:text-[16px] text-[14px] leading-[20px] font-[400]">
            Posted by{" "}
            <span className="text-black font-[700]">
              {authorName ? authorName : ""}
            </span>{" "}
            - updated on {dateString}
          </p></div>
          <div className="flex flex-row gap-[24px] md:ml-[auto]">
            <Image
              src={"/icons/share.svg"}
              alt="back arrow"
              width="24"
              height="24"
            />
            <Image
              src={"/icons/print.svg"}
              alt="back arrow"
              width="24"
              height="24"
            />
            <Image
              src={"/icons/download.svg"}
              alt="back arrow"
              width="24"
              height="24"
            />
            <Image
              src={"/icons/save.svg"}
              alt="back arrow"
              width="24"
              height="24"
            />
          </div>
        </div>
        <Image
          height={600}
          width={1207}
          layout="intrinsic"
          style={{ display: "block" }}
          className="md:mb-[60px] mb-[40px] 3xl:max-h-[600px] 2xl:max-h-[441px] md:max-h-[358px] max-h-[167px] object-cover"
          src={urlFor(image).width(960).url()}
          alt="article main"
        />
        <div className="text-black 3xl:px-[153px] 2xl:px-[114px] md:px-[61px] md:[&>p]:text-[16px] [&>p]:text-[14px] [&>p]:leading-[20px] [&>p]:mb-[20px] 2xl:[&>h2]:text-[24px] md:[&>h2]:text-[20px] [&>h2]:text-[16px] 2xl:[&>h2]:leading-[30px] md:[&>h2]:leading-[26px] [&>h2]:leading-[20px] [&>h2]:font-[700] [&>h2]:mt-[30px] [&>h2]:mb-[30px]">
          <PortableText value={body} components={ptComponents} />
        </div>
        <div className="flex justify-center mt-[60px]">
          <Link href={"/blog"}>
            <div className="md:p-[16px_32px_16px_42px] p-[8px_52px_8px_53px] flex-center md:gap-[20px] gap-[16px] border-[2px] border-black md:text-[16px] text-[12px] md:leading-[24px] leading-[px] font-[500] uppercase text-black bg-white hover:text-black hover:scale-[1.02]">
              <Image
                src={"/icons/goBack.svg"}
                alt="back arrow"
                width="24"
                height="24"
                className="md:max-w-[24px] max-w-[18px] md:max-h-[24px] max-h-[18px]"
              />
              <span>Back to article list</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
