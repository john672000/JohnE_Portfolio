import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="skills-header" style={{ color: theme.text }}>
          Technical and Vocational Expertise
        </h1>
      </Fade>
      <SkillSection theme={theme} />
    </div>
  );
}
