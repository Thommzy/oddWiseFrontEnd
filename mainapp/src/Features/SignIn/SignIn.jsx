import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Signin.css";
import LoginForm from "../Auth/Login/LoginForm";
import log from "../images/login_img.png";
import { connect } from "react-redux";
import LoginLoaderInfo from "../Auth/Login/LoginLoaderInfo";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ErrorNotification from "./ErrorNotification";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

class SignIn extends Component {
  loading() {
    if (this.props.loading) {
      return (
        <div>
          <LoginLoaderInfo />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="signInOverall">
        {this.loading()}
        <Container>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <LoginForm />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="regImg">
                <Image src={log} />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loading: state.auth.loading };
}

export default connect(mapStateToProps)(SignIn);
