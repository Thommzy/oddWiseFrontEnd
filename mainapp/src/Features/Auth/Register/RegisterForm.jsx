import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Segment, Button, Header } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { RegisterAction } from "./RegisterAction";
import TextInput from "../../../app/Common/Form/TextInput";
import "./RegisterForm.css";

class RegisterForm extends Component {
  submit = values => {
    console.log(values);
    this.props.RegisterAction(values, this.props.history);
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

// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// });
const reduxFormSignin = reduxForm({
  form: "RegisterForm"
})(RegisterForm);

export default connect(mapStateToProps, { RegisterAction })(
  withRouter(reduxFormSignin)
);
