import { NOTION_POSTS_DATABASE_ID } from "./constants";
import { convertPageProperty, notionClient } from "./notion";

export async function fetchPosts() {
  try {
    const pages = [];
    let offset;

    while (true) {
      const res = await notionClient.databases.query({
        database_id: NOTION_POSTS_DATABASE_ID,
        start_cursor: offset,
        page_size: 100,
      });

      pages.push(...res.results);
      if (res.has_more) {
        offset = res.next_cursor;
      } else {
        break;
      }
    }

    return pages.map((page) => convertPageProperty(page));
  } catch (err) {
    console.log(err);
    throw new Error("fetchPosts 실패");
  }
}
