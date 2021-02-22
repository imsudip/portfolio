import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";

import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects2.css";
import { NavLink,} from "react-router-dom";

import { link } from "fs";
class InProjects extends Component {
  render() {
    const theme = this.props.theme;
    const state = this.props.location.state ?? { title: "not found" };
    return (
      <div className="projects-main">
        <Header theme={theme} />
        
        
        <div>
          {ProjectsData.data.map((section) => {

            return section.title === state.title ? <div className="project-card " >
              <text className="project-heading">{section.title+" Projects"}</text>
              <div className="repo-cards-div-main">

                {section.data.map((repo) => {
                  return <GithubRepoCard repo={repo} theme={theme} />;
                })}
              </div>
            </div> : state.title === "not found" ? <div className="project-card " >
              <text className="project-heading">{section.title+" Projects"}</text>
              <div className="repo-cards-div-main">

                {section.data.map((repo) => {
                  return <GithubRepoCard repo={repo} theme={theme} />;
                })}
              </div>
            </div> : <></>;
          })}
        </div >
        <div className="project-button-div">
          <NavLink
            to="/projects"
            Link={link}

            activeStyle={{ fontWeight: "bold" }}
            style={{ color: theme.text }}


          >
            <Button

              text={"All projects"}
              className="project-button"
              href="/projects"

              theme={theme}
            />
          </NavLink>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default InProjects;
