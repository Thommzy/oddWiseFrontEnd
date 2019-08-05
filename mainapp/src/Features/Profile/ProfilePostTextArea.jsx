import React from "react";
import { Form } from "semantic-ui-react";

const ProfilePostTextArea = () => (
  <Form>
    <Form.Field>
      <label>What's Happening</label>
      <input placeholder='Write Your Post here' />
    </Form.Field>
  </Form>
);

export default ProfilePostTextArea;
