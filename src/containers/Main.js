import React, { Component, useEffect } from "react";
import { Route, Switch, HashRouter, useLocation } from "react-router-dom";
import Home from "../pages/home/HomeComponent";

import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";

import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";

import InProjects from "../pages/inProjects/Projects";


export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);

    return (
      <div>

        <HashRouter basename="/">
          <ScrollToTop />
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
            {/* <Link to='/inprojects/#section1'></Link> */}
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
            {/* <Route
                path="/opensource"
                render={(props) => (
                  <Opensource {...props} theme={this.props.theme} />
                )}
              /> */}
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />
            
            <Route
              path="/inprojects"
              
              render={(props) => (
                <InProjects {...props} theme={this.props.theme} />
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
