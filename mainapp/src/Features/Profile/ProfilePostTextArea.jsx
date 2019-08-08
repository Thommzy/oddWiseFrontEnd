import React, { Component } from "react";
import { Form, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import { createPost } from "./ProfilePostAction";

const inputStyle = {
  whiteSpace: "pre-wrap",
  wordBreak: "break-all"
};

class ProfilePostTextArea extends Component {
  state = {
    text: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    //const { onAddPost } = this.props;
    e.preventDefault();
    if (this.state.text.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
      console.log(this.state);
    }
  };

  handleReset = () => {
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>What's Happening</label>
            <TextArea
              style={inputStyle}
              type='text'
              className='form-control'
              name='text'
              onChange={this.handleInputChange}
              value={this.state.text}
              placeholder='Write Your Post here'
            />
          </Form.Field>
          <button type='submit' className='btn btn-primary'>
            Add Post
          </button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProfilePostTextArea);
