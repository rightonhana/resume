import React, { FC } from "react";
import EducationAndTrainingProps from "./EducationAndTrainingProps";
import { Education } from "../Education/Education";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import styles from "./EducationAndTraining.module.css";

export const EducationAndTraining: FC<EducationAndTrainingProps> = ({
	education,
	...props
}) => {
	const educationData = education.map((edu, index) => <Education
		key={index}
		educationName={edu.name}
		date={edu.date ? edu.date : ""}
	/>);
	return (
		<section {...props}>
			<SectionTitle title="Education"/>
			<div className={styles.EducationData}>
				{educationData}
			</div>
		</section>
	)
};