import ProjectData from "./ProjectData";

export interface ExperienceData {
	/** Company name */
	company: string;
	/** Company color */
	color: string;
	/** Job title */
	jobTitle: string;
	/** Period worked */
	period: string;
	/** Projects */
	experience: ProjectData[];
}

export default ExperienceData;