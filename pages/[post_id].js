import PostHeader from "@/components/Post/PostHeader";
import { fetchPost } from "@/lib/fetchPost";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const { post_id } = ctx.params;
  const post = await fetchPost(post_id);

  return {
    props: {
      post,
    },
  };
}

export default function PostDetailPage(props) {
  const { post } = props;

  const router = useRouter();

  useEffect(() => {
    console.log(post);
  }, [props]);

  if (router.isFallback) {
    return <>Loading ...</>;
  }

  return (
    <>
      <PostHeader {...post} />
    </>
  );
}
