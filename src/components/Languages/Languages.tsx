import React, { FC } from "react";
import { SectionTitle } from "../SectionTitle/sectionTitle";
import styles from "./Languages.module.css";

export const Languages: FC<{}> = ({
	...props
}) => (
	<section {...props}>
		<SectionTitle title="Languages" />
		<div className={styles.LanguagesList}>
			<span>
				<strong>English</strong>: Upper Intermediate
			</span>
			<span>
				<strong>Spanish</strong>: Native
			</span>
		</div>
	</section>
);
