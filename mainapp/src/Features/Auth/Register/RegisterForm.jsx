import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/Common/Form/TextInput";
import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div>
      <Form size='large'>
        <Segment>
          <Field
            name='displayName'
            type='text'
            component={TextInput}
            placeholder='Known As'
          />
          <Field
            name='email'
            type='text'
            component={TextInput}
            placeholder='Email'
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
};

export default reduxForm({ form: "RegisterForm" })(RegisterForm);