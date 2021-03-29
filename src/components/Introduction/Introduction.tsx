import React, { FC } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import { introductionProps } from "./IntroductionProps";
import styles from "./Introduction.module.css";

export const Introduction: FC<introductionProps> = ({intro, ...props}) => (
	<section {...props}>
		<SectionTitle title="About me"/>
		<header className={styles.Header}>
			<img className={styles.Image} src="/profile-photo.png" alt="Profile photo"/>
			<h1>Florencia Gonzalez</h1>
		</header>
		<p>{intro}</p>
	</section>
);