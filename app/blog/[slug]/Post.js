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
    <div className="bg-white flex justify-center py-[78px]">
      <div className="max-w-[867px] mx-[20px]">
        <h1 className="text-black text-[42px] leading-[42px] font-[800] mb-[30px] uppercase font-machina">
          {title}
        </h1>
        <div className="flex items-center gap-[20px] text-[16px] leading-[16px] font-[400] mb-[30px]">
          <Image
            src={urlFor(authorImage).width(60).url()}
            alt={`${authorName} author`}
            width={60}
            height={60}
          />
          <p className="text-black text-[16px] leading-[19px] font-[400]">
            Posted by{" "}
            <span className="text-black font-[700]">
              {authorName ? authorName : ""}
            </span>{" "}
            - updated on {dateString}
          </p>
        </div>
        <Image
          height={428}
          width={867}
          layout="intrinsic"
          style={{ display: "block" }}
          className="mb-[52px]"
          src={urlFor(image).width(960).url()}
          alt="article main"
        />
        <div className="text-black">
          <PortableText value={body} components={ptComponents} />
        </div>
        <div className="flex justify-center mt-[50px]">
          <Link href={"/blog"}>
            <div className="px-[32px] py-4 bg-black flex-center gap-[10px] text-[16px] leading-[16px] font-[500] uppercase text-white hover:bg-white hover:text-black hover:scale-[1.02]">
              <Image
                src={"/icons/go-back.svg"}
                alt="back arrow"
                width="35"
                height="15"
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
