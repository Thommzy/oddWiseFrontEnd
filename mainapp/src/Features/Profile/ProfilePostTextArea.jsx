import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import ProfileTextArea from "../../app/Common/Form/profileTextArea";
import TextInput from "../../app/Common/Form/TextInput";
import { loadData } from "../../Actions/PostDataActions";
import { loadPosts } from "../../Actions";

const inputStyle = {
  whiteSpace: "pre-wrap",
  wordBreak: "break-all"
};

class ProfilePostTextArea extends Component {
  submit = event => {
    const { trackHistory } = this.props;
    console.log(trackHistory);
    const postData = {
      text: event.text,
      trackHistory
    };
    console.log(postData);
    this.props.post(postData);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Form onSubmit={handleSubmit(this.submit)}>
          <Segment>
            <Field
              name="text"
              component={ProfileTextArea}
              type="text"
              placeholder="what's Happening"
              rows="4"
            />
          </Segment>
          <Button className="LoginButton" fluid size="small" color="teal">
            send
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  post: postData => dispatch(loadData(postData))
});

const reduxFormProfilePost = reduxForm({
  form: "ProfilePost"
})(ProfilePostTextArea);

export default connect(null, mapDispatchToProps)(reduxFormProfilePost);
