var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(e,l)=>{for(var o in l||(l={}))t.call(l,o)&&r(e,o,l[o]);if(n)for(var o of n(l))a.call(l,o)&&r(e,o,l[o]);return e},o=(e,r)=>{var l={};for(var o in e)t.call(e,o)&&r.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&n)for(var o of n(e))r.indexOf(o)<0&&a.call(e,o)&&(l[o]=e[o]);return l};import{r as i,a as c}from"./vendor.487404c9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,l)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){l(new Error(`Failed to import: ${e}`)),r(c)},onload(){n(self[t].moduleMap[o]),r(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");var s="_Title_gat7d_1";const m=e=>{var{title:t}=e;o(e,["title"]);return i.createElement("h1",{className:s},t)};var p="_Image_v93e1_1",d="_Header_v93e1_5",u="_AboutMe_v93e1_13",E="_Intro_v93e1_19";const g=e=>{var{intro:t}=e,n=o(e,["intro"]);return i.createElement("section",l({},n),i.createElement(m,{title:"About me"}),i.createElement("div",{className:u},i.createElement("header",{className:d},i.createElement("img",{className:p,src:"./profile-photo.png",alt:"Profile photo"}),i.createElement("h1",null,"Florencia Gonzalez")),i.createElement("p",{className:E},t)))};var v="_Data_708gc_1";const h=e=>{var t=o(e,[]);return i.createElement("section",l({},t),i.createElement(m,{title:"Personal Info"}),i.createElement("div",{className:v},i.createElement("span",null,i.createElement("strong",null,"Date of Birth"),": 09/30/1995"),i.createElement("span",null,i.createElement("strong",null,"From"),": Mar del Plata, Buenos Aires, Argentina"),i.createElement("span",null,i.createElement("strong",null,"Living in"),": Bellevue, Washington, USA"),i.createElement("span",null,i.createElement("strong",null,"Marital status"),": Married"),i.createElement("span",null,i.createElement("strong",null,"Contact"),": ",i.createElement("a",{href:"https://rightonhana.me",rel:"noopener noreferrer"},"rightonhana.me"))))};var y="_SkillsList_wvmxh_1";var S="_Skill_ij1yn_1",f="_SkillName_ij1yn_9";const _=e=>{var{skill:t}=e,n=o(e,["skill"]);return i.createElement("div",l({className:S},n),i.createElement("span",{className:f},t))},N=e=>{var{skills:t}=e,n=o(e,["skills"]);const a=t.map(((e,t)=>i.createElement(_,{key:t,skill:e})));return i.createElement("section",null,i.createElement(m,{title:"Skills"}),i.createElement("div",l({className:y},n),a))},T=["JavaScript","TypeScript","React","Svelte","Angular 2+","HTML5","CSS3","Git","CSS Modules","UX","Angular Material UI","Jest","Vite","Emotion","SASS","Styled-Components","BEM","Jira","Confluence","Bootstrap","AngularJS","HLS","Scrum","Kanban","NPM","PNPM","Yarn"];var A="_Project_1ith7_1",b="_Client_1ith7_14";const I=e=>{var{client:t,color:n,appDescription:a,task:r,technologies:c}=e,s=o(e,["client","color","appDescription","task","technologies"]);const m=c.map(((e,t)=>t!==c.length-1?`${e}, `:`${e}.`)),p=r.map(((e,t)=>i.createElement("p",{key:t},"- ",e)));return i.createElement("div",l({className:A,style:{"--company-color":n}},s),i.createElement("div",null,i.createElement("strong",null,"Client:")," ",i.createElement("span",{className:b},t)),i.createElement("div",null,i.createElement("strong",null,"Worked on:")," ",a),i.createElement("div",null,i.createElement("strong",null,"Tasks:")," ",p),i.createElement("div",null,i.createElement("strong",null,"Technologies:")," ",m))};var D="_Experience_1me81_1",M="_Header_1me81_5";const U=e=>{var{company:t,color:n,jobTitle:a,period:r,experience:c}=e,s=o(e,["company","color","jobTitle","period","experience"]);const m=c.map(((e,t)=>i.createElement(I,{client:e.client,color:n,appDescription:e.appDescription,task:e.task,technologies:e.technologies,key:t})));return i.createElement("div",l({className:D,style:{"--company-color":n}},s),i.createElement("header",{className:M},t," - ",a," - ",r),i.createElement("div",null,m))},k=e=>{var{experience:t}=e,n=o(e,["experience"]);const a=t.map(((e,t)=>i.createElement(U,{key:t,company:e.company,color:e.color,jobTitle:e.jobTitle,period:e.period,experience:e.experience})));return i.createElement("section",l({},n),i.createElement(m,{title:"Experience"}),a)},C=[{company:"SPARK DIGITAL",color:"#F44611",jobTitle:"SOFTWARE ENGINEER",period:"JUL, 2019 to JAN, 2020",experience:[{client:"RealEyes Media",appDescription:"Developed a video player for Disney - Fox Sport Go.",task:["Developed new features.","Performed bug fixing.","Optimized the general UI/UX (a11y)."],technologies:["HLS","DASH","ADOBE","Angular 7","TypeScript","HTML5","CSS3","Conviva Analytics","Nielsen Analytics","Charles","GIT","Jira","Confluence","Scrum"]},{client:"RealEyes Media",appDescription:"Maintenance video player for NBC.",task:["Performed bug fixing."],technologies:["HLS","DASH","ADOBE","Angular 6","TypeScript","HTML5","CSS3","Conviva Analytics","Nielsen Analytics","GIT","Jira","Confluence","Scrum"]},{client:"RealEyes Media",appDescription:"Video data extractor.",task:["Developed new features.","Performed bug fixing and code reviews.","Optimized the general UI/UX (a11y).","Improved the overall code quality."],technologies:["HLS","DASH","Angular 5","TypeScript","HTML5","CSS3","GIT","Jira","Confluence","Scrum"]}]},{company:"MOTIV INFORMATION TECHNOLOGY",color:"#008080",jobTitle:"SOFTWARE ENGINEER",period:"FEB, 2019 to JUL, 2019",experience:[{client:"Motiv Information Technology",appDescription:"Company webpage.",task:["Created from scratch.","Applied UX designs."],technologies:["Wordpress"]},{client:"Corcentric",appDescription:"Development of a new Corcentric Portal.",task:["Developed new features and components.","Performed bug fixing.","Optimized the general UI/UX."],technologies:["Angular 7","TypeScript","HTML5","CSS3","Bootstrap 3","Angular Material UI","GIT","Jira","Scrum"]},{client:"Ors Group",appDescription:"Developed a proof of Concept (PoC) generator app.",task:["Improved the general UX (a11y, user interaction, best practices) and the general code structure.","Limited enforcement in a code base. Optimized the UI.","Developed components and code review."],technologies:["Angular 5","TypeScript","HTML5","CSS3","Bootstrap 3","Angular Material UI","GIT","Scrum"]},{client:"Motiv Benefits",appDescription:"Company benefits administration and consumption tool.",task:["Developed new features.","Performed bug fixing and code reviews.","Optimized the general UI/UX (a11y).","Improved the overall code quality."],technologies:["AngularJS","JavaScript","HTML5","CSS3","Bootstrap 3","GIT","Kanban"]}]},{company:"GLOBANT",color:"#2D572C",jobTitle:"SOFTWARE ENGINEER",period:"JUN, 2018 to FEB, 2019",experience:[{client:"Royal Caribbean",appDescription:"App for cruise employee pre-check (contracts, life insurance, emergency contacts, health state, and so on).",task:["Developed highly accessible (keyboard controls, screen reader support, high-contrast, and so on) material design component.","Followed mockups, styling, layout and code review.","Performed bug fixing."],technologies:["Angular 6/7","TypeScript","HTML5","SASS (with BEM)","Jest","GIT","Jira","Scrum"]}]}];var O="_LanguagesList_8psrc_1";const w=e=>{var t=o(e,[]);return i.createElement("section",l({},t),i.createElement(m,{title:"Languages"}),i.createElement("div",{className:O},i.createElement("span",null,i.createElement("strong",null,"English"),": Upper Intermediate"),i.createElement("span",null,i.createElement("strong",null,"Spanish"),": Native")))};var L="_Education_160xq_1",x="_Date_160xq_9";const P=e=>{var{educationName:t,date:n}=e,a=o(e,["educationName","date"]);return i.createElement("div",l({className:L},a),i.createElement("span",null,"- ",t," ",i.createElement("span",{className:x},n)))};var R="_EducationData_11bc2_1";const G=e=>{var{education:t}=e,n=o(e,["education"]);const a=t.map(((e,t)=>i.createElement(P,{key:t,educationName:e.name,date:e.date?e.date:""})));return i.createElement("section",l({},n),i.createElement(m,{title:"Education"}),i.createElement("div",{className:R},a))},J=[{name:"Universidad Tecnologica Nacional - Software Developer Technician",date:"DEC-2019"},{name:"Universidad Tecnologica Nacional - 111 MIL - Java developer",date:"NOV-2018",duration:"1 year (Extended to 2 years)",Output:"Java developer"},{name:"Facultad de Ingeniería de la Universidad Nacional - Informatics Engineering",date:"DEC-2017"},{name:"Universidad Atlántida Argentina & Game Work Jump - GIT Workshop for Unity",date:"NOV-2017",duration:"6hs (Theory + Practice)"},{name:"Universidad Siglo XXI - Web Design",date:"NOV-2017",duration:"1 year"},{name:"Globant - Java Initial Course",date:"NOV-2016",duration:"4 months"},{name:"Unity & Facultad de Ingeniería de la Universidad Nacional - Unity 5 RoadShow",date:"APR-2016",duration:"12hs (Theory + Practice)"},{name:"Universidad Siglo XXI - Web Programming",date:"NOV-2016",duration:"1 year"},{name:"ACTIVATE, Google & Universidad Complutense Madrid - Mobile Apps Course",date:"NOV-2015",duration:"40hs (Theory + Practice)"}],j=()=>i.createElement(i.Fragment,null,i.createElement(g,{intro:"Florencia is a Software Engineer with 2 years’ experience in web development. She has experience with multiple versions of Angular, SASS, typescript, node and NPM. Good understanding of the Javascript fundamentals and ES5 vs ES6 features. She acted as a referent in UX and Angular 2. Florencia has been working in a personal project using technologies like React, Svelte and Vite. In her spare time she love to watch movies and shows, playing video games and learn new technologies. Recently she is learning 3D modeling."}),i.createElement(k,{experience:C}),i.createElement(N,{skills:T}),i.createElement(G,{education:J}),i.createElement(h,null),i.createElement(w,null));c.render(i.createElement(i.StrictMode,null,i.createElement(j,null)),document.getElementById("root"));
