import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import Particles from "react-particles-js";
export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="particle">
          <Particles
            params={{
              particles: {
                number: {
                  value: window.innerWidth < 768 ? window.innerWidth < 420 ? 15 : 30 : 90
                },
                color: {
                  value: "#209CF0",
                  opacity:0.4,
                },
                links: {
                  opacity: 0.4,
                  color: {
                    value: "#1c6d4e"
                  }
                },
                size: {
                  value: window.innerWidth < 768 ? window.innerWidth < 420 ? 1 : 2 : 3
                }
              },

              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  }
                }
              }
            }}
          />
        </div>
        <div className="greeting-main">

          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {"Hi, I'm Sudip Ghosh"}<span className="wave-emoji">{emoji("👋")}</span>
                
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="Hire me"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}
