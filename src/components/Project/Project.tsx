import React, { FC } from "react";
import { ProjectProps } from "./ProjectProps";
import styles from "./Project.module.css";

export const Project: FC<ProjectProps> = ({
	client,
	color,
	appDescription,
	task,
	technologies,
	personalImpact,
  ...props
}) => {
	const technologiesUsed = technologies.map((skill, index) => index !== (technologies.length - 1) ? `${skill}, ` : `${skill}.`);
	const tasks = task.map((activity, index) => <p key={index}>- {activity}</p>);
	return (
		<div className={styles.Project} style={{["--company-color" as string]: color }} {...props}>
			<div>
				<strong>Client:</strong> <span className={styles.Client}>{client}</span>
			</div>
			<div>
				<strong>Worked on:</strong> {appDescription}
			</div>
			<div>
				<strong>Tasks:</strong> {tasks}
			</div>
			<div>
				<strong>Technologies:</strong> {technologiesUsed}
			</div>
			<div>
				<strong>Personal impact:</strong> {personalImpact}
			</div>
		</div>
	);
};
