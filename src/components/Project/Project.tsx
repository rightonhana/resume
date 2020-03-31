import React, { FC } from "react";
import ProjectProps from "./ProjectProps";
import styles from "./Project.module.css";

export const Project: FC<ProjectProps> = ({
    client,
    appDescription,
    task,
    technologies,
  ...props
}) => {
  const technologiesUsed = technologies.map((skill, index) => index !== (technologies.length - 1) ? `${skill}, ` : `${skill}.`);
  const tasks = task.map((activity, index) => <p key={index}>- {activity}</p>);
  return (
  <div className={styles.Project} {...props}>
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
  </div>
);};

export default Project;
