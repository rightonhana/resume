import React, { FC } from "react";
import style from "./MainSection.module.css";
import MainSectionProps from "./MainSectionProps";
import SectionTitle from "../SectionTitle";
import WorkExperience from "../WorkExperience";
import { ReactComponent as ExperienceIcon } from "../../images/experienceIcon.svg";
import { ReactComponent as EducationIcon } from "../../images/educationIcon.svg";
import EducationAndTraining from "../EducationAndTraining/EducationAndTraining";
import education from "../../const/education.const";

export const MainSection: FC<MainSectionProps> = ({
    experience,
  ...props
}) => (
  <div className={style.MainSection} {...props}>
    <SectionTitle title="Experience">
        <ExperienceIcon className={style.Title}/>
    </SectionTitle>
    <WorkExperience experience={experience}/>
    <SectionTitle title="Education">
        <EducationIcon className={style.Title}/>
    </SectionTitle>
    <EducationAndTraining education={education}/>
  </div>
);

export default MainSection;
