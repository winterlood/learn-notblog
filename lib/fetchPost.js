import { convertPageProperty, notionClient } from "./notion";

export async function fetchPost(id) {
  try {
    const res = await notionClient.pages.retrieve({
      page_id: id,
    });

    return convertPageProperty(res);
  } catch (err) {
    console.log(err);
    throw new Error("fetchPost 실패");
  }
}
