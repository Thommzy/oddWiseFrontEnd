import React, { Component } from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

class ProfileOthers extends Component {
  render() {
    return (
      <Segment className='profileOthers '>
        <Header as='h4'>
          <Icon name='settings' />
          <Header.Content>Settings</Header.Content>
        </Header>
        <Header as='h4'>
          <Icon name='share square outline' />
          <Header.Content>Logout</Header.Content>
        </Header>
      </Segment>
    );
  }
}

export default ProfileOthers;
