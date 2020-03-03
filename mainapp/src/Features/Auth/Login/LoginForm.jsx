import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Form, Segment, Button, Header, Message } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/Common/Form/TextInput";
//import { signInAction } from "./LoginAction";
//import { login } from "./LoginNewAction";
import { connect } from "react-redux";
import "./LoginForm.css";
import { useAlert } from "react-alert";
import { loginloading } from "../../../Actions/LoginActions";
//import loginRequest from "../../../SagaLogin/Action";

class LoginForm extends Component {
  submit = event => {
    const { history } = this.props;
    console.log(history);
    const loginData = {
      emailorusername: event.emailorusername,
      password: event.password,
      history
    };
    console.log(loginData);
    this.props.login(loginData);
  };

  alert = () => useAlert();
  errorMessage() {
    if (this.props.errorMessage) {
      return this.alert.show("Oh look, an alert!");
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="loginFormMain">
        <Form error size="large" onSubmit={handleSubmit(this.submit)}>
          <Segment>
            <Header as="h2">Log In</Header>
            <Field
              name="emailorusername"
              component={TextInput}
              type="text"
              placeholder="Email Address"
            />
            <Field
              name="password"
              component={TextInput}
              type="password"
              placeholder="password"
            />
            <Button className="LoginButton" fluid size="large" color="teal">
              Login
            </Button>
            <Header as="h5">
              Don't have an account? <Link to="/signup">Register</Link>
            </Header>
            {/* {this.errorMessage ? (
              <Message color="red">{this.errorMessage()}</Message>
            ) : null} */}
          </Segment>
        </Form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

const mapDispatchToProps = dispatch => ({
  login: loginData => dispatch(loginloading(loginData))
});
const reduxFormSignin = reduxForm({
  form: "LoginForm"
})(LoginForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(reduxFormSignin));
