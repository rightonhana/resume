import React, { FC } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import styles from "./PersonalInfo.module.css";

export const PersonalInfo: FC<{}> = ({...props}) => (
	<section className={styles.Info}>
		<SectionTitle title="Personal Info"/>
		<span><strong>Date of Birth</strong>: 09/30/1995</span>
		<span><strong>From</strong>: Mar del Plata, Buenos Aires, Argentina</span>
		<span><strong>Living in</strong>: Bellevue, Washington, USA</span>
		<span><strong>Marital status</strong>: Married</span>
		<span><strong>Contact</strong>: <a href="https://rightonhana.me" rel="noopener noreferrer">rightonhana.me</a></span>
	</section>
);