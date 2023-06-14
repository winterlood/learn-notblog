import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.inner}>
        <div className={style.logo}>{"Winterlood's Log"}</div>
        <div className={style.menu_list}>
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
        </div>
      </div>
    </header>
  );
}
