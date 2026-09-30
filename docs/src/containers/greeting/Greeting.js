import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Typewriter from "react-typewriter-effect";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="heading-text-div">
          <h1 className="heading-text" style={{ color: theme.text }}>
            About Me
          </h1>
        </div>
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                <Typewriter
                  text={greeting.title}
                  textStyle={{
                    fontSize: "60px",
                    fontWeight: "bold",
                    color: theme.text,
                    fontFamily: "Google Sans Bold",
                  }}
                  cursorColor="transparent"
                  typeSpeed={50}
                  eraseSpeed={50}
                  eraseDelay={2000}
                />

              </h1>
              <p
                className="subTitle1"
                style={{ color: theme.secondaryText }}
              >

                <Typewriter
                  text={greeting.subtitle1}
                  textStyle={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: theme.secondaryText,
                    fontFamily: "Google Sans Medium",
                  }}
                  cursorColor="transparent"
                  typeSpeed={30}
                  eraseSpeed={50}
                  eraseDelay={2000}
                />
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}

              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
