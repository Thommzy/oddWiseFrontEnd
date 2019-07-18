import React, { Component } from "react";
import { Segment, Container, Image } from "semantic-ui-react";
import "./Signup.css";

class signUp extends Component {
  render() {
    return (
      <Segment
        inverted
        textAlign='center'
        vertical
        className='oddWiseHomeSignPage'
      >
        <Container text>
          <Image src='/assets/images/oddWise1.png' size='medium' />
          <Image
            src='/assets/images/oddWise2.png'
            size='medium'
            className='HomePageSecondImage'
          />
          <Image
            src='/assets/images/oddWise7.png'
            size='medium'
            className='HomePageThirdImage'
          />
        </Container>
      </Segment>
    );
  }
}

export default signUp;
