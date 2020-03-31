import React, { FC } from "react";
import style from "./Header.module.css";

export const Header: FC<{}> = ({
  ...props
}) => (
  <div className={style.Header} {...props}>
      <div className={style.HeaderImgSection}>
        <img className={style.HeaderImage} src="/photo.png" alt="Florencia Gonzalez"/>
      </div>
      <div className={style.HeaderNameSection}>
        <span>Florencia Gonzalez</span>
      </div>
  </div>
);

export default Header;
