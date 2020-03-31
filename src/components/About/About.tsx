import React, { FC } from "react";
import AboutProps from "./AboutProps";
import styles from "./About.module.css";

export const About: FC<AboutProps> = ({
  description,
  ...props
}) => (
  <div className={styles.About} {...props}>
      {description}
  </div>
);

export default About;
