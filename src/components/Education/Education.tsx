import React, { FC } from "react";
import { EducationProps } from "./EducationProps";
import style from "./Education.module.css";
import { ReactComponent as EducationIcon } from "../../images/educationIcon.svg";

export const Education: FC<EducationProps> = ({
    educationName,
    date,
  ...props
}) => (
  <div className={style.Education} {...props}>
    <span><EducationIcon className={style.Icon}/> {educationName} <span className={style.Date} >{date}</span></span>
  </div>
);

export default Education;
