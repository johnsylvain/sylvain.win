import { h } from "kobra";
import style from "./style.css";

export const Page = (props, children) => (
  <div className={style.container}>
    {props.title && <h1 className={style.title}>{props.title}</h1>}
    <div className={style.box}>{children}</div>
  </div>
);
