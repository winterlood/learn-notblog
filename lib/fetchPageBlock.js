import { NotionAPI } from "notion-client";
const notionAPI = new NotionAPI();

export async function fetchPageBlock(id) {
  try {
    const pageBlock = await notionAPI.getPage(id);
    return pageBlock;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
