import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import { competitiveSites, eduHeader } from "../../portfolio";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Typewriter from "react-typewriter-effect";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {eduHeader.title}
                </h1>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  <CompetitiveSites logos={competitiveSites.competitiveSites} />

                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typewriter
                      text={eduHeader["description"]}
                      textStyle={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: theme.secondaryText,
                        fontFamily: "Google Sans Bold",
                      }}
                      cursorColor="transparent"
                      typeSpeed={30}
                      eraseSpeed={50}
                      eraseDelay={2000}
                    />
                  </div>
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={eduHeader["sections"]} theme={theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
