import React, { FC } from "react";
import styles from "./PersonalInfo.module.css";
import Email from "../Email";
import Birthday from "../Birthday";
import Location from "../Location";
import Phone from "../Phone";
import Url from "../Url";
import MaritalStatus from "../MaritalStatus";
import BirthLocation from "../BirthLocation";

export const PersonalInfo: FC<{}> = ({
  ...props
}) => (
  <div className={styles.PersonalInfo} {...props}>
      <Birthday/>
      <BirthLocation/>
      <Location/>
      <MaritalStatus/>
      <Phone/>
      <Email/>
      <Url/>
  </div>
);

export default PersonalInfo;
