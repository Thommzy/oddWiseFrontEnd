import React, { Component } from "react";
import { Container, Image, Grid } from "semantic-ui-react";
import "./Signup.css";
import RegisterForm from "../Auth/Register/RegisterForm";
import reg from "../images/register_img.png";
import { connect } from "react-redux";

class signUp extends Component {
  render() {
    return (
      <div className="signUpOverall">
        <Container>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <RegisterForm />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="regImg">
                <Image src={reg} />
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
    loading: state.signupLoading,
    signupSuccess: state.signupSuccess
  };
}

export default connect(mapStateToProps)(signUp);
