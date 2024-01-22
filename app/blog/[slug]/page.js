import Post from "./Post";
import client from "../../../components/lib/sanity.client";
import groq from "groq";

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  _createdAt,
  _updatedAt,
  "image": mainImage,
  "authorImage": author->image,
  "authorName": author->name,
  body
}`;

const getSinglePost = async (slug) => {
  const res = await client.fetch(query, { slug });
  return res;
};

const PostPage = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  if (!post) return null;

  return <Post post={post} />;
};

export default PostPage;
