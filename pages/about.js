import ArticleRenderer from "@/components/common/ArticleRenderer";
import { NOTION_ABOUT_PAGE_ID } from "@/lib/constants";
import { fetchPageBlock } from "@/lib/fetchPageBlock";

export async function getStaticProps() {
  const pageBlock = await fetchPageBlock(NOTION_ABOUT_PAGE_ID);
  return {
    props: {
      pageBlock,
    },
    revalidate: 1,
  };
}

export default function AboutPage({ pageBlock }) {
  return (
    <>
      <ArticleRenderer pageBlock={pageBlock} />
    </>
  );
}
