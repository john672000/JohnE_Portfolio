import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "../components/header/Header.js";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    if (settings.isSplash) {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Header theme={theme} />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="*"
                render={(props) => (
                  <Error404 {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    } else {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/contact"
                render={(props) => (
                  <Contact {...props} theme={this.props.theme} />
                )}
              />
              <Route
                path="/projects"
                render={(props) => (
                  <Projects {...props} theme={this.props.theme} />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }
}
