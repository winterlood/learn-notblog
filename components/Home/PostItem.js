import { useRouter } from "next/router";
import style from "./PostItem.module.css";

export default function PostItem({
  id,
  cover,
  created_time,
  title,
  tags,
}) {
  const router = useRouter();

  const goToPostDetailPage = () => {
    router.push(`/${id}`);
  };

  return (
    <div className={style.container} onClick={goToPostDetailPage}>
      <img src={cover} alt={`${title}의 썸네일 이미지`} />
      <div className={style.content_info}>
        <h4>{title}</h4>
        <div className={style.created_time}>
          {new Date(created_time).toLocaleDateString()}
        </div>
        <div className={style.tag_list_wrapper}>
          {tags.map((it, idx) => (
            <span key={`${id}-${idx}`}>#{it}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
