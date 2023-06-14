import PostHeader from "@/components/Post/PostHeader";
import ArticleRenderer from "@/components/common/ArticleRenderer";
import { fetchPageBlock } from "@/lib/fetchPageBlock";
import { fetchPost } from "@/lib/fetchPost";
import { useRouter } from "next/router";

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(ctx) {
  const { post_id } = ctx.params;

  const [postReq, pageBlockReq] = await Promise.allSettled([
    fetchPost(post_id),
    fetchPageBlock(post_id),
  ]);

  if (
    postReq.status === "fulfilled" &&
    pageBlockReq.status === "fulfilled"
  ) {
    return {
      props: {
        post: postReq.value,
        pageBlock: pageBlockReq.value,
      },
      revalidate: 1,
    };
  } else {
    throw new Error("/[post_id] 페이지 getStaticProps 오류 발생");
  }
}

export default function PostDetailPage(props) {
  const { post, pageBlock } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <>Loading ...</>;
  }

  return (
    <>
      <PostHeader {...post} />
      <ArticleRenderer pageBlock={pageBlock} />
    </>
  );
}
