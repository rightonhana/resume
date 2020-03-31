import React, { FC } from "react";
import style from "./Languages.module.css";
import Language from "../Language/Language";

export const Languages: FC<{}> = ({
  ...props
}) => (
  <div className={style.Languages} {...props}>
    <Language language="English" level="Upper Intermediate" />
    <Language language="Spanish" level="Native" />
  </div>
);

export default Languages;
