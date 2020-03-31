import React, { FC } from "react";
import style from "./BirthLocation.module.css";
import { ReactComponent as LocationIcon } from "../../images/locationIcon.svg";

export const BirthLocation: FC<{}> = ({
  ...props
}) => (
  <div className={style.BirthLocation} {...props}>
    <LocationIcon className={style.Icon}/>
    <span className={style.BirthLocationAddress}>From: Mar del Plata, BsAs, Argentina</span>
  </div>
);

export default BirthLocation;
