import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/Common/Form/TextInput";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <Form error size='large'>
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
    </Form>
  );
};

export default reduxForm({ form: "LoginForm" })(LoginForm);
