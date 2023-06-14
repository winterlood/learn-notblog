import PostItem from "./PostItem";
import style from "./PostList.module.css";

export default function PostList({ posts }) {
  return (
    <div className={style.container}>
      <h3>📚 {posts.length}개의 게시글</h3>
      <div className={style.item_list_wrapper}>
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
