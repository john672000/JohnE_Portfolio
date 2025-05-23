import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <Accordion
          onChange={() => { }}
        >
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                expanded
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.highlight}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      fontFamily: "Google Sans Regular",
                      fontSize: '15px'
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience) => {
                  return <ExperienceCard experience={experience} theme={theme} />;
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
