import React, { FC } from "react";
import Experience from "../Experience";
import WorkExperienceProps from "./WorkExperienceProps";

export const WorkExperience: FC<WorkExperienceProps> = ({
    experience,
  ...props
}) => {
    const workData = experience.map((work, index) => <Experience 
        key={index}
        company={work.company}
        jobTitle={work.jobTitle}
        period={work.period}
        experience={work.experience}
        />);
    return (
  <div {...props}>
      {workData}
  </div>
)};

export default WorkExperience;
