import React from 'react';
import { Introduction } from './components/Introduction/Introduction';
import { Skills } from './components/Skills/Skills';
import {technologies} from './const/technologies.const';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { experience } from './const/experience.const';
import { EducationAndTraining } from './components/EducationAndTraining/EducationAndTraining';
import { education } from './const/education.const';
import styles from "./App.module.css";

export const App = () => (
	<div className={styles.App}>
		<Introduction/>
		<WorkExperience experience={experience}/>
		<Skills skills={technologies}/>
		<EducationAndTraining education={education}/>
	</div>
);

export default App;