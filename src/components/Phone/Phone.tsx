import React, { FC } from "react";
import style from "./Phone.module.css";
import { ReactComponent as PhoneIcon } from "../../images/phoneIcon.svg";

export const Phone: FC<{}> = ({
  ...props
}) => (
  <div className={style.Phone} {...props}>
    <PhoneIcon className={style.Icon}/>
    <span className={style.PhoneNumber}>(425)480-0798</span>
  </div>
);

export default Phone;
