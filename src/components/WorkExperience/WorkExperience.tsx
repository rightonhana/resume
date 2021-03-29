import React, { FC } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import { Experience } from "../Experience/Experience";
import { WorkExperienceProps } from "./WorkExperienceProps";

export const WorkExperience: FC<WorkExperienceProps> = ({
	experience,
	...props
}) => {
	const workData = experience.map((work, index) => <Experience 
		key={index}
		company={work.company}
		color={work.color}
		jobTitle={work.jobTitle}
		period={work.period}
		experience={work.experience}
	/>);
	return (
		<section {...props}>
			<SectionTitle title="Experience"/>
			{workData}
		</section>
	)
};
