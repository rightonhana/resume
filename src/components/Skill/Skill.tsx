import React, { FC } from "react";
import SkillProps from "./SkillProps";
import styles from "./Skill.module.css";

export const Skill: FC<SkillProps> = ({
  skill,
  ...props
}) => (
  <div className={styles.Skill} {...props}>
      <span className={styles.SkillName}>{skill}</span>
  </div>
);

export default Skill;
