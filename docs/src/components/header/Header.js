import React, { Component, useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import SeoHeader from "../seoHeader/SeoHeader";
import Button from "../button/Button";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};


class Header extends Component {
  closeMenu = () => {
    const checkbox = document.getElementById("menu-btn");
    if (checkbox) checkbox.checked = false;
  };

  render() {
    const theme = this.props.theme;
    const toggleTheme = this.props.toggleTheme;
    const icon = this.props.icon;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label
              className="menu-icon"
              htmlFor="menu-btn"
              style={{
                borderColor: theme.text, // For the border of the menu icon
                color: 'theme.text', // Color of the icon (hamburger bars)
              }}
            >
              <span
                className="navicon"
                style={{
                  background: theme.text, // Bar color
                }}
              ></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: theme.text }}
                  style={{ color: theme.text }}
                  onClick={this.closeMenu}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: theme.text }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={this.closeMenu}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: theme.text }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={this.closeMenu}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: theme.text }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={this.closeMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold", color: theme.text }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={this.closeMenu}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
            <Button
              theme={theme}
              title={"Change Theme"}
              onClick={toggleTheme}
              icon={icon}
            />
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
