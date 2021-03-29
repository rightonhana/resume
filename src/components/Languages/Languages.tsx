import React, { FC } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import style from "./Languages.module.css";

export const Languages: FC<{}> = ({
	...props
}) => (
	<section className={style.Languages} {...props}>
		<SectionTitle title="Languages" />
		<span>
			<strong>English</strong>: Upper Intermediate
		</span>
		<span>
			<strong>Spanish</strong>: Native
		</span>
	</section>
);
