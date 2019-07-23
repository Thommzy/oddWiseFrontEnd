import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Segment, Image, Icon } from "semantic-ui-react";
import "./Profile.css";

class ProfileBanner extends Component {
  render() {
    return (
      <Segment className='profileBanner'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image
                src='https://react.semantic-ui.com/images/wireframe/square-image.png'
                size='small'
                circular
              />
              <Card className='profilePicture'>
                <Card.Content>
                  <Card.Header>Daniel</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='user' />
                    10 Friends
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ProfileBanner;
