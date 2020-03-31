import React, { FC } from "react";
import style from "./MaritalStatus.module.css";
import { ReactComponent as MaritalIcon } from "../../images/maritalIcon.svg";

export const MaritalStatus: FC<{}> = ({
  ...props
}) => (
  <div className={style.Marital} {...props}>
    <MaritalIcon className={style.Icon}/>
    <span className={style.MaritalStatus}>Married</span>
  </div>
);

export default MaritalStatus;
