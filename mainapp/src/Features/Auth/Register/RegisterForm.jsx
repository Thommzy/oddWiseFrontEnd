import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { RegisterAction } from "./RegisterAction";
import TextInput from "../../../app/Common/Form/TextInput";
import "./RegisterForm.css";

// const mapStateToProps = state => ({
//   data: state.test.data,
//   first_name: state.test.first_name
// });

class RegisterForm extends Component {
  // state = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   mobile_no: "",
  //   password: ""
  // };

  // handleRegFormSubmit = values => {
  //   console.log(values);
  //   this.props.userPostFetch(this.state);
  // };
  submit = values => {
    console.log(values);
    this.props.RegisterAction(values, this.props.history);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <div className='info-red'>{this.props.errorMessage}</div>;
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Form size='large' onSubmit={handleSubmit(this.submit)}>
          <Segment>
            <Field
              name='first_name'
              type='text'
              component={TextInput}
              placeholder='FirstName'
            />
            <Field
              name='last_name'
              type='text'
              component={TextInput}
              placeholder='LastName'
            />
            <Field
              name='email'
              type='text'
              component={TextInput}
              placeholder='Email'
            />
            <Field
              name='mobile_no'
              type='number'
              component={TextInput}
              placeholder='MobileNumber'
            />
            <Field
              name='password'
              type='password'
              component={TextInput}
              placeholder='Password'
            />
            <Button className='registerButton' fluid size='large'>
              Register
            </Button>
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

export default connect(
  mapStateToProps,
  { RegisterAction }
)(withRouter(reduxFormSignin));
