import React, { FC } from "react";
import style from "./SectionTitle.module.css";
import SectionTitleProps from "./SectionTitleProps";

export const SectionTitle: FC<SectionTitleProps> = ({
    title,
    children,
  ...props
}) => (
  <div className={style.SectionTitle} {...props}>
        {children}
        <span>{title}</span>
  </div>
);

export default SectionTitle;
