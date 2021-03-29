import React, { FC } from "react";
import {SkillsProps} from "./SkillsProps";
import styles from "./Skills.module.css";
import {Skill} from "../Skill/Skill";
import { SectionTitle } from "../SectionTitle/sectionTitle";

export const Skills: FC<SkillsProps> = ({
	skills,
	...props
}) => {
	const skillBoxes = skills.map((skill, index) => <Skill key={index} skill={skill}/>);
	return (
		<section>
			<SectionTitle title="Skills"/>
			<div className={styles.Skills} {...props}>
				{skillBoxes}
			</div>
		</section>
	);
};
