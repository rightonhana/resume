import ProjectData from "./ProjectData";

export type ExperienceData = {
	/** Company name */
	company: string;
	/** Company color */
	color: string;
	/** Job title */
	jobTitle: string;
	/** Period worked */
	period: string;
	/** Location */
	location: string;
	/** Projects */
	experience: ProjectData[];
}

export default ExperienceData;