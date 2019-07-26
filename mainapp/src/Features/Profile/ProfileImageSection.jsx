import React, { Component } from "react";
import { Segment, Image, Header, Button } from "semantic-ui-react";

class ProfileImageSection extends Component {
  render() {
    return (
      <Segment className='profilePictureSegment'>
        <Image
          src='assets/images/oddwiseFace_1.jpg'
          size='tiny'
          alt='logo'
          circular
        />
        <Header as='h4'>Faniran Olaitan</Header>
        <Button positive size='mini'>
          Beginner
        </Button>
      </Segment>
    );
  }
}

export default ProfileImageSection;
