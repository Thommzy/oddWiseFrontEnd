import React from "react";
import { Form, Segment, Button, Header, Input } from "semantic-ui-react";
import "./Signup.css";

const SignUpForm = () => (
  <Segment inverted className="signUpForm">
    <Header as="h2">SignUp</Header>
    <Form>
      <Form.Input fluid label="First name" placeholder="First name" />
      <Form.Input fluid label="Username" placeholder="Username" />
      <Form.Input label="Email" placeholder="joe@schmoe.com" />
      <Form.Field>
        <label>Phone Number</label>
        <Input placeholder="+234 XXX XXXX XXX" />
      </Form.Field>
      <Form.Checkbox label="I agree to the Terms and Conditions" />
      <Button type="submit">Submit</Button>
    </Form>
  </Segment>
);
export default SignUpForm;
