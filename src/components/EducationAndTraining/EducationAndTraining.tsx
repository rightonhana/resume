import React, { FC } from "react";
import EducationAndTrainingProps from "./EducationAndTrainingProps";
import Education from "../Education/Education";

export const EducationAndTraining: FC<EducationAndTrainingProps> = ({
    education,
  ...props
}) => {
    const educationData = education.map((edu, index) => <Education
      key={index}
      educationName={edu.name}
      date={edu.date ? edu.date : ""}
    />);
    return (
  <div {...props}>
      {educationData}
  </div>
)};

export default EducationAndTraining;
