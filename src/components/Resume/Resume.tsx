import React, { FC } from "react";
import style from "./Resume.module.css";
import Header from "../Header";
import SideSection from "../SideSection";
import MainSection from "../MainSection";
import technologies from '../../const/technologies.const';
import experience from '../../const/experience.const';

export const Resume: FC<{}> = () => (
    <>
        <Header/>
        <div className={style.Resume}>
        <SideSection technologies={technologies}/>
        <MainSection experience={experience}/>
        </div>
    </>
);

export default Resume;
