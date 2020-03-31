import React from 'react';
import experience from './const/experience.const';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';
import style from "./App.module.css";
import technologies from './const/technologies.const';

function App() {
  return (
    <>
      <Header/>
      <div className={style.Data}>
        <SideSection technologies={technologies}/>
        <MainSection experience={experience}/>
      </div>
    </>
  );
}

export default App;
