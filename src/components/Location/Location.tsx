import React, { FC } from "react";
import style from "./Location.module.css";
import { ReactComponent as LocationIcon } from "../../images/locationIcon.svg";

export const Location: FC<{}> = ({
  ...props
}) => (
  <div className={style.Location} {...props}>
    <LocationIcon className={style.Icon}/>
    <span className={style.LocationCity}>Currently: Bellevue, WA, United States</span>
  </div>
);

export default Location;
