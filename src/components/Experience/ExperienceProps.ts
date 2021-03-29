import ProjectData from "../../types/ProjectData";

export interface ExperienceProps {
	/** Company name */
	company: string;
	/** Company color */
	color: string;
	/** Job title */
	jobTitle: string;
	/** Work period */
	period: string;
	/** Projects info */
	experience: ProjectData[];
};