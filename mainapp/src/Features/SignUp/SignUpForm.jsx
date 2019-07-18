import React from "react";
import { Form, Segment } from "semantic-ui-react";
import "./Signup.css";

const SignUpForm = () => (
  <Segment inverted className='signUpForm'>
    <Form>
      <Form.Input
        error={{ content: "Please enter your first name", pointing: "below" }}
        fluid
        label='First name'
        placeholder='First name'
      />
      <Form.Input
        error='Please enter your last name'
        fluid
        label='Last name'
        placeholder='Last name'
      />
      <Form.Checkbox
        label='I agree to the Terms and Conditions'
        error={{
          content: "You must agree to the terms and conditions",
          pointing: "left"
        }}
      />
    </Form>
  </Segment>
);
export default SignUpForm;
