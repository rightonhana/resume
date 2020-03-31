import ProjectData from "./ProjectData.interface";

export interface ExperienceData {
    /** Company name */
    company: string;
    /** Job title */
    jobTitle: string;
    /** Period worked */
    period: string;
    /** Projects */
    experience: ProjectData[];
}

export default ExperienceData;