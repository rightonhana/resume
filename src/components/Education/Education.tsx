import React, { FC } from "react";
import { EducationProps } from "./EducationProps";
import style from "./Education.module.css";

export const Education: FC<EducationProps> = ({
	educationName,
	date,
	...props
}) => (
	<div className={style.Education} {...props}>
		<span>- {educationName} <span className={style.Date} >{date}</span></span>
	</div>
);
