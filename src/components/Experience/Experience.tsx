import React, { FC } from "react";
import { ExperienceProps } from "./ExperienceProps";
import { Project } from "../Project/Project";
import style from "./Experience.module.css";

export const Experience: FC<ExperienceProps> = ({
	company,
	color,
	jobTitle,
	period,
	experience,
	...props
}) => {
	const projects = experience.map((project, index) => <Project 
		client={project.client}
		color={color}
		appDescription={project.appDescription}
		task={project.task}
		technologies={project.technologies}
		key={index}
	/>);
	return (
	<div className={style.Experience} style={{["--company-color" as string]: color }} {...props}>
		<header className={style.Header}>
			{company} - {jobTitle} - {period}
		</header>
		<div>
			{projects}
		</div>
	</div>
)};
