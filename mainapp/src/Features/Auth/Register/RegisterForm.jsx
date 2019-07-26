import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/Common/Form/TextInput";
import { userPostFetch } from "./RegisterAction";
import "./RegisterForm.css";

const mapStateToProps = state => ({
  data: state.test.data,
  first_name: state.test.first_name
});

// const mapStateToProps = state => {
//   return {
//     initialValues: {
//       first_name: state.test.first_name
//     }
//   };
// };
class RegisterForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    password: ""
  };

  handleRegFormSubmit = values => {
    console.log(values);
    this.props.userPostFetch(this.state);
  };
  render() {
    const { first_name } = this.props;
    return (
      <div>
        <Form
          size='large'
          onSubmit={this.props.handleSubmit(this.handleRegFormSubmit)}
        >
          <Segment>
            {first_name}
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

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "RegisterForm" })(RegisterForm));
