import { Client } from "@notionhq/client";
import { NOTION_POSTS_DATABASE_ID } from "./constants";

const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
});

function convertPageProperty(page) {
  const {
    id,
    created_time,
    cover,
    properties: { title, tags },
  } = page;

  return {
    id,
    created_time,
    cover:
      cover.type === "file" ? cover.file.url : cover.external.url,
    title: title.title.map((it) => it.plain_text).join(" "),
    tags: tags.multi_select.map((it) => it.name),
  };
}

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
