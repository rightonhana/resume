import ProjectData from "../../interfaces/ProjectData.interface";

/**
 * Props
 */
export interface ExperienceProps {
    /** Company name */
    company: string;
    /** Job title */
    jobTitle: string;
    /** Work period */
    period: string;
    /** Projects info */
    experience: ProjectData[];
}

export default ExperienceProps;