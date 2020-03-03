import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Signin.css";
import LoginForm from "../Auth/Login/LoginForm";
import log from "../images/login_img.png";
import { connect } from "react-redux";
import LoginLoaderInfo from "../Auth/Login/LoginLoaderInfo";

class SignIn extends Component {
  loading() {
    // console.log(this.props.history);
    const { loading } = this.props;
    if (loading) {
      return (
        <div>
          <LoginLoaderInfo />
        </div>
      );
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div className="signInOverall">
        {this.loading()}
        {/* {this.props.loginSuccess ? this.props.history.push("/timeline") : null} */}
        <Container>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <LoginForm history={history} />
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
  return {
    loading: state.loginLoading,
    loginSuccess: state.loginSuccess
  };
}

export default connect(mapStateToProps)(SignIn);
