import React, { FC } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import styles from "./Introduction.module.css";
import photo from "/profile-photo.png";
import { PersonalInfo } from "../PersonalInfo/PersonalInfo";
import { Languages } from "../Languages/Languages";

export const Introduction: FC<{}> = ({...props}) => (
	<section className={styles.AboutMe} {...props}>
		<header className={styles.Header}>
			<img className={styles.Image} src={photo} alt="Profile photo"/>
			<h1>Florencia Gonzalez</h1>
		</header>
		<div>
			<PersonalInfo/>
			<Languages/>
		</div>
	</section>
);