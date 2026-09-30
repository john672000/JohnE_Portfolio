import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";


class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">

              <Fade right duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade left duration={1200}>
                <SoftwareSkill className="logos-skills" logos={skill.softwareSkills} />
              </Fade>
              <Fade right duration={1500}>
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{
                          color: theme.secondaryText,
                          fontFamily: "Google Sans Medium"

                        }}
                      >
                        <p>• {skillSentence}</p>
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
