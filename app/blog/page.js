import AllPosts from "./AllPosts";
import client from "../../components/lib/sanity.client";
import groq from "groq";

const query = groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": mainImage,
  "authorName": author->name,
  "authorImage": author->image,
}`;

const getPosts = async () => {
  const res = await client.fetch(query);
  console.log(res);
  return res;
};

const BlogPage = async () => {
  const fakePosts = await getPosts();
  return <AllPosts posts={fakePosts} />;
};

export default BlogPage;
