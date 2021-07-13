import React, { FC } from "react";
import { ExperienceProps } from "./ExperienceProps";
import { Project } from "../Project/Project";
import styles from "./Experience.module.css";

export const Experience: FC<ExperienceProps> = ({
	company,
	color,
	jobTitle,
	period,
	location,
	experience,
	...props
}) => {
	const projects = experience.map((project, index) => <Project 
		client={project.client}
		color={color}
		appDescription={project.appDescription}
		task={project.task}
		technologies={project.technologies}
		personalImpact={project.personalImpact}
		key={index}
	/>);
	return (
	<div className={styles.Experience} style={{["--company-color" as string]: color }} {...props}>
		<header className={styles.Header}>
			{company} - {jobTitle} - {period} - {location}
		</header>
		<div>
			{projects}
		</div>
	</div>
)};
