import React, { FC } from "react";
import SkillsProps from "./SkillsProps";
import styles from "./Skills.module.css";
import Skill from "../Skill/Skill";

export const Skills: FC<SkillsProps> = ({
  skills,
  ...props
}) => {
    const skillBoxes = skills.map((skill, index) => <Skill key={index} skill={skill}/>);
    return (
        <div className={styles.Skills} {...props}>
            {skillBoxes}
        </div>
    );
};

export default Skills;
