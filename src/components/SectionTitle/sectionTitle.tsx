import React, { FC } from "react";
import { SectionTitleProps } from "./SectionTitleProps";
import styles from "./SectionTitle.module.css";

export const SectionTitle: FC<SectionTitleProps> = ({title, ...props}) => (
	<h1 className={styles.Title}>
		{title}
	</h1>
);