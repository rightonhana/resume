import React, { FC } from "react";
import style from "./Birthday.module.css";
import { ReactComponent as BirthdayIcon } from "../../images/birthdayIcon.svg";

export const Birthday: FC<{}> = ({
  ...props
}) => (
  <div className={style.Birthday} {...props}>
    <BirthdayIcon className={style.Icon}/>
    <span className={style.BirthdayDate}>September 30th, 1995</span>
  </div>
);

export default Birthday;
