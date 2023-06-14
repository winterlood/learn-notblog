import Head from "next/head";
import { fetchPosts } from "@/lib/fetchPosts";
import PostList from "@/components/Home/PostList";

export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList posts={posts} />
    </>
  );
}
