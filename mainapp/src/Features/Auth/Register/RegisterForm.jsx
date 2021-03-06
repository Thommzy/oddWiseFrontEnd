import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Segment, Button, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { RegisterAction } from "./RegisterAction";
import TextInput from "../../../app/Common/Form/TextInput";
import "./RegisterForm.css";
import { signupLoading } from "../../../Actions/SignUpAction";

class RegisterForm extends Component {
  submit = event => {
    console.log(event);
    const signupData = {
      email: event.email,
      name: event.name,
      username: event.username,
      mobile_no: event.mobile_no,
      password: event.password
    };
    console.log(signupData);
    this.props.signup(signupData);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <div className="info-red">{this.props.errorMessage}</div>;
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="registerFormMain">
        <Form size="large" onSubmit={handleSubmit(this.submit)}>
          <Segment>
            <Header as="h2">Register</Header>
            <Field
              name="name"
              type="text"
              component={TextInput}
              placeholder="Name"
            />
            <Field
              name="username"
              type="text"
              component={TextInput}
              placeholder="Username"
            />
            <Field
              name="email"
              type="text"
              component={TextInput}
              placeholder="Email"
            />
            <Field
              name="mobile_no"
              type="number"
              component={TextInput}
              placeholder="MobileNumber"
            />
            <Field
              name="password"
              type="password"
              component={TextInput}
              placeholder="Password"
            />
            <Button className="registerButton" fluid size="large">
              Register
            </Button>
            <Header as="h5">
              Already have an account? <Link to="/signin">Login</Link>
            </Header>
          </Segment>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const mapDispatchToProps = dispatch => ({
  signup: signupData => dispatch(signupLoading(signupData))
});
const reduxFormSignin = reduxForm({
  form: "RegisterForm"
})(RegisterForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(reduxFormSignin));
