import React, { Component } from "react";
import { Icon, Header, Segment } from "semantic-ui-react";

class ProfileDetails extends Component {
  render() {
    return (
      <Segment className="profileDetails">
        <Header as='h4'>
          <Icon name='calendar' />
          <Header.Content>10th/Jan/2019</Header.Content>
        </Header>
        <Header as='h4'>
          <Icon name='user' />
          <Header.Content>ForestBaba</Header.Content>
        </Header>
        <Header as='h4'>
          <Icon name='transgender alternate' />
          <Header.Content>Male</Header.Content>
        </Header>
        <Header as='h4'>
          <Icon name='birthday cake' />
          <Header.Content>10th/Jan/1960</Header.Content>
        </Header>
      </Segment>
    );
  }
}

export default ProfileDetails;
