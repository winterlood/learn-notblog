import style from "./PostHeader.module.css";

export default function PostHeader({
  title,
  cover,
  created_time,
  tags,
}) {
  return (
    <div className={style.container}>
      <img src={cover} alt={`${title}의 썸네일 이미지`} />
      <h2>{title}</h2>
      <div className={style.created_time}>
        {new Date(created_time).toLocaleDateString()}
      </div>
      <div className={style.tag_list_wrapper}>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}
