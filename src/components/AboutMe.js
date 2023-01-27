import { useState } from "react";
import "./AboutMe.css";
import Highlights from "./Highlights";
import Education from "./Education";
import Skill from "./Skill";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState(true);
  const [education, setEducation] = useState(false);
  const [skill, setSkill] = useState(false);

  const aboutMeHandler = () => {
    setAboutMe(true);
    setEducation(false);
    setSkill(false);
  };

  const educationalHandler = () => {
    setEducation(true);
    setAboutMe(false);
    setSkill(false);
  };


  const skillHandler = () => {
    setSkill(true);
    setEducation(false);
    setAboutMe(false);
  };

  return (
    <div className="aboutme-container">
      <h1>About Me</h1>
      <table className="about-me">
        <tr className="about-nav">
          <th>
            <button
              style={aboutMe ? { borderBottom: "3px solid #fff" } : {}}
              onClick={aboutMeHandler}
            >
              About Me
            </button>
          </th>
          <th>
            <button
              style={education ? { borderBottom: "3px solid #fff" } : {}}
              onClick={educationalHandler}
            >
              Educational Qualification
            </button>
          </th>
          <th>
            <button
              style={skill ? { borderBottom: "3px solid #fff" } : {}}
              onClick={skillHandler}
            >
              Skill Sets
            </button>
          </th>
        </tr>
        <tr>
          <td colSpan="4">
            <div className="about-content">
              {aboutMe && <Highlights />}
              {education && <Education />}
              {skill && <Skill />}
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AboutMe;
