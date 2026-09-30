import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        style={{
          backgroundColor: theme.headerColor, fontFamily: "Google Sans Regular", border: `1px solid`,
          borderRadius: `20px`,
          borderColor: `${theme.secondaryText}`,
          boxShadow: `0px 0px 8px ${theme.highlight}`,
        }}
      >
        <div className="experience-card-logo-div">
          <div className="experience-card-logo-text"
            style={{
              background: !theme.text,
              color: theme.text,
              boxShadow: `0px 4px 12px ${theme.highlight}`,
            }}>
            {experience["abv"].toUpperCase()}
          </div>
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.text,
                    outlineColor: theme.highlight,
                  }}
                >
                  {experience["company"]}

                </a>

              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.text }}
              >
                {experience["location"]}

              </p>
              <p
                style={{ color: theme.text }}>{experience["duration"]}</p>

            </div>
            <div className="experience-card-heading-right">

              <div className="experience-summary-section">
                <p
                  className="experience-summary"
                  style={{ color: theme.text }}
                >
                  {experience["description"]}

                </p>
              </div>

            </div>
          </div>
          <div className="metrics-container">
            {/* Tech skill bars */}
            {experience.tech && experience.tech.map((item, index) => (
              <div key={index} className="metric-bar">
                <span style={{ color: theme.text }}>{item.name}</span>
                <div className="bar-bg">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: theme.highlight,
                    }}
                  />
                </div>
                <span style={{ color: theme.secondaryText }}>{item.value}%</span>
              </div>
            ))}

            {/* Stats cards */}
            {experience.stats && (
              <div className="stats-cards">
                {Object.entries(experience.stats).map(([key, value], index) => (
                  <div key={index} className="stat-card"
                    style={{ backgroundColor: theme.highlight }}
                  >
                    {`${key}: ${value}`}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
