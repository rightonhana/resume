import React from 'react';
import { Introduction } from './components/Introduction/Introduction';
import { introduction } from './const/introduction.const';
import styles  from "./App.module.css";
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo';
import { Skills } from './components/Skills/Skills';
import {technologies} from './const/technologies.const';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { experience } from './const/experience.const';
import { Languages } from './components/Languages/Languages';
import { EducationAndTraining } from './components/EducationAndTraining/EducationAndTraining';
import { education } from './const/education.const';

export const App = () => (
	<main className={styles.Container}>
		<div className={styles.Sections}>
			<div>
				<Introduction intro={introduction}/>
				<PersonalInfo/>
				<Skills skills={technologies}/>
				<Languages/>
			</div>
			<div>
				<WorkExperience experience={experience}/>
				<EducationAndTraining education={education}/>
			</div>
		</div>
	</main>
);

export default App;