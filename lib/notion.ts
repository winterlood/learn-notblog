import { Client } from "@notionhq/client";

export const notionClient = new Client({
  auth: process.env.NOTION_API_KEY,
});

export function convertPageProperty(page) {
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
