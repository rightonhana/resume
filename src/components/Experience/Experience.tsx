import React, { FC } from "react";
import { ExperienceProps } from "./ExperienceProps";
import Project from "../Project";
import style from "./Experience.module.css";

export const Experience: FC<ExperienceProps> = ({
  company,
  jobTitle,
  period,
  experience,
  ...props
}) => {
    const projects = experience.map((project, index) => <Project 
    client={project.client}
    appDescription={project.appDescription}
    task={project.task}
    technologies={project.technologies}
    key={index}
    />);
    return (
  <div className={style.Experience} {...props}>
    <header className={style.Header}>
        {company} - {jobTitle} - {period}
    </header>
    <div>
      {projects}
    </div>
  </div>
)};

export default Experience;
