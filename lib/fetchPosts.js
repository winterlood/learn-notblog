import { Client } from "@notionhq/client";
import { NOTION_POSTS_DATABASE_ID } from "./constants";

const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
});

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

    return pages.map((page) => ({
      id: page.id,
      created_time: page.created_time,
      cover:
        page.cover.type === "file"
          ? page.cover.file.url
          : page.cover.external.url,
      title: page.properties.title.title
        .map((it) => it.plain_text)
        .join(" "),
      tags: page.properties.tags.multi_select.map((it) => it.name),
    }));
  } catch (err) {
    console.log(err);
    throw new Error("fetchPosts 실패");
  }
}
