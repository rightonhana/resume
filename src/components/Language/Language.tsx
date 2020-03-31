import React, { FC } from "react";
import { LanguageProps } from "./LanguageProps";
import style from "./Language.module.css";
import { ReactComponent as LanguageIcon } from "../../images/languageIcon.svg";

export const Language: FC<LanguageProps> = ({
    language,
    level,
  ...props
}) => (
  <div className={style.Language} {...props}>
    <LanguageIcon className={style.Icon}/>
    <span className={style.LanguageName}>{language} </span>
    <span> {level}</span>
  </div>
);

export default Language;
