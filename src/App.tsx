import React from 'react';
import { Introduction } from './components/Introduction/Introduction';
import { introduction } from './const/introduction.const';
import { PersonalInfo } from './components/PersonalInfo/PersonalInfo';
import { Skills } from './components/Skills/Skills';
import {technologies} from './const/technologies.const';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { experience } from './const/experience.const';
import { Languages } from './components/Languages/Languages';
import { EducationAndTraining } from './components/EducationAndTraining/EducationAndTraining';
import { education } from './const/education.const';

export const App = () => (
	<>
		<Introduction intro={introduction}/>
		<WorkExperience experience={experience}/>
		<Skills skills={technologies}/>
		<EducationAndTraining education={education}/>
		<PersonalInfo/>
		<Languages/>
	</>
);

export default App;