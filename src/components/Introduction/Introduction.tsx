import React, { FC } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import { introductionProps } from "./IntroductionProps";
import styles from "./Introduction.module.css";
import photo from "/profile-photo.png";

export const Introduction: FC<introductionProps> = ({intro, ...props}) => (
	<section {...props}>
		<SectionTitle title="About me"/>
		<div className={styles.AboutMe}>
			<header className={styles.Header}>
				<img className={styles.Image} src={photo} alt="Profile photo"/>
				<h1>Florencia Gonzalez</h1>
			</header>
			<p className={styles.Intro}>{intro}</p>
		</div>
	</section>
);