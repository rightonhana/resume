import React, { FC } from "react";
import style from "./Url.module.css";
import { ReactComponent as UrlIcon } from "../../images/urlIcon.svg";

export const Url: FC<{}> = ({
  ...props
}) => (
  <div className={style.Url} {...props}>
    <UrlIcon className={style.Icon}/>
    <a rel="noopener noreferrer" href="https://rightonhana.me" className={style.UrlAddress}>rightonhana.me</a>
  </div>
);

export default Url;
