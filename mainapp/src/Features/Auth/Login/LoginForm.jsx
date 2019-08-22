import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/Common/Form/TextInput";
//import { signInAction } from "./LoginAction";
import { login } from "./LoginNewAction";
import { connect } from "react-redux";
import "./LoginForm.css";

class LoginForm extends Component {
  submit = values => {
    console.log(values);
    this.props.login(values, this.props.history);
  };

  errorMessage() {
    if (this.props.errorMessage) {
      return <div className='info-red'>{this.props.errorMessage}</div>;
    }
  }

  
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form error size='large' onSubmit={handleSubmit(this.submit)}>
        <Segment>
          <Field
            name='email'
            component={TextInput}
            type='text'
            placeholder='Email Address'
          />
          <Field
            name='password'
            component={TextInput}
            type='password'
            placeholder='password'
          />
          <Button className='LoginButton' fluid size='large' color='teal'>
            Login
          </Button>
        </Segment>
        {this.errorMessage()}
      </Form>
    );
  }
}
function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

const reduxFormSignin = reduxForm({
  form: "LoginForm"
})(LoginForm);

export default connect(
  mapStateToProps,
  { login }
)(withRouter(reduxFormSignin));
