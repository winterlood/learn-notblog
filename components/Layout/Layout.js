import Header from "./Header";
import style from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={style.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
