import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import Button from "../../components/button/Button";
import { NavLink, Link } from "react-router-dom";


function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}
const wrapperLink = (state, path) =>
  React.forwardRef((props, ref) => (
    <Link
      innerRef={ref}
      to={{
        pathname: path,
        state: {
          ...state
        }
      }}
      {...props}
    />
  ));

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          const state = {
            title: skill.title
          };
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
                <Fade right duration={2000}>
                  {skill.title === "UI/UX Design" ? <Button
                    text="View projects"
                    newTab={true}
                    href={"https://dribbble.com/sdpdrkprince"}
                    theme={theme}
                    className="view-btn"
                  /> : <div className="view-btn-div">
                      <NavLink
                        to={"/inprojects"}

                        component={wrapperLink(state, "/inprojects")}
                        activeStyle={{ fontWeight: "bold" }}
                        style={{ color: theme.text }}


                      >
                        <Button
                          text="View projects"
                          newTab={false}
                          href={"/inprojects"}
                          theme={theme}
                          className="view-btn"
                        />
                      </NavLink>

                    </div>}
                </Fade>

              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
