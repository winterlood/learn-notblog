import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
export default function ArticleRenderer({ pageBlock }) {
  return (
    <NotionRenderer
      recordMap={pageBlock}
      components={{
        Code,
      }}
    />
  );
}
