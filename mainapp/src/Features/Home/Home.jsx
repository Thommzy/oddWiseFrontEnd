import React from "react";
import {
  Segment,
  Container,
  Header,
  Image,
  Button,
  Icon
} from "semantic-ui-react";
import Particles from "react-particles-js";
import logo from "../images/logo.svg";

const particleOpt = {
  particles: {
    shadow: {
      enable: true,
      color: "#203063"
    },
    number: {
      value: 50
    },
    size: {
      value: 3
    },
    color: {
      value: "#203063"
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#203063",
        blur: 2
      }
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
};

const Home = ({ history }) => {
  return (
    <div className="mainLanding">
      <Segment>
        <div className="oddWiseHome">
          <Particles
            params={particleOpt}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
          />
        </div>

        <div className="landingContent">
          <Header as="h3" inverted>
            <Image
              size="massive"
              src={require("../images/logo.svg")}
              alt="logo"
            />
            {/* <img src={require("./svg/kiwi.svg")} /> */}
            {/* Odd-Wise */}
          </Header>
          <Button onClick={() => history.push("/signup")}>Get Started</Button>
        </div>
      </Segment>
    </div>
  );
};

export default Home;
