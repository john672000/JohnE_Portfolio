import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio.js";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import Typewriter from "react-typewriter-effect";


class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  <CompetitiveSites logos={certifications.certifications} />
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typewriter
                      text={experience["description"]}
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
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
