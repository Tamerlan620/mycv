import React from "react";
import MYCV from "../Components/MYCV/MYCV-Dev.pdf"

const Skills = ({selectedLanguage}) => {
  return (
    <div className="SkillPage">
    <img src="../Pics/1.jpg" alt="" />

      <h1 className="skillHeader">
      {
      selectedLanguage==="AZ" ?
      "Bacarıqlarım" :
      "Skills"
      }
      
      </h1>
      <div className="d-flex justify-content-between">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>BOOTSTRAP</li>
          <li>Tailwind</li>
        </ul>
        <ul>
          <li>JAVASCRIPT</li>
          <li>JQUERY</li>
          <li>ES6,ES7</li>
          <li>JSON</li>
          <li>AJAX,FETCH,AXIOS</li>
          <li>GITHUB</li>
        </ul>
        <ul>
          <li>REACT JS</li>
          <li>HOOKS</li>
          <li>Context API</li>
          <li>REST API</li>
          <li>REDUX</li>
          <li>PHP(beginner)</li>
          <li>MYSQL(beginner)</li>
          <li>Node.js(beginner)</li>
        </ul>
      </div>
      <button className="Resume">
        <a
          className="Resumebutton"
          href={MYCV}
          download="Resume"
        >
        {
        selectedLanguage==="AZ" ?
        "CV yüklə" :
        "Download Resume"
        }
        </a>
      </button>
    </div>
  );
};

export default Skills;
