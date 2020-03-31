import React, { FC } from "react";
import style from "./SideSection.module.css";
import SectionTitle from "../SectionTitle";
import SideSectionProps from "./SideSectionProps";
import { ReactComponent as PersonalInfoIcon } from "../../images/personalInfoIcon.svg";
import { ReactComponent as AboutIcon } from "../../images/aboutIcon.svg";
import { ReactComponent as SkillIcon } from "../../images/skillIcon.svg";
import { ReactComponent as LanguageIcon } from "../../images/languageIcon.svg";
import About from "../About";
import { introduction } from "../../const/introduction.const";
import Languages from "../Languages";
import Skills from "../Skills";
import PersonalInfo from "../PersonalInfo";

export const SideSection: FC<SideSectionProps> = ({
  technologies,
  ...props
}) => (
  <div className={style.SideSection} {...props}>
    <SectionTitle title="Personal info">
        <PersonalInfoIcon className={style.Title}/>
    </SectionTitle>
    <PersonalInfo/>
    <SectionTitle title="About me">
        <AboutIcon className={style.Title}/>
    </SectionTitle>
    <About description={introduction} />
    <SectionTitle title="Skills">
        <SkillIcon className={style.Title}/>
    </SectionTitle>
    <Skills skills={technologies}/>
    <SectionTitle title="Languages">
        <LanguageIcon className={style.Title}/>
    </SectionTitle>
    <Languages/>
  </div>
);

export default SideSection;
