import React, { Component } from "react";
import { Segment, Grid, Card, Icon, Button, Label } from "semantic-ui-react";
import ProfilePostTextArea from "./ProfilePostTextArea";

const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York."
].join(" ");

class ProfilePost extends Component {
  render() {
    return (
      <Segment className='profilePost'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <ProfilePostTextArea />
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Button as='div' labelPosition='right'>
                    <Button basic color='blue' icon>
                      <Icon name='heart' />
                      Like
                    </Button>
                    <Label basic color='blue' as='a' pointing='left'>
                      2,048
                    </Label>
                  </Button>
                  <Icon name='user' />4 Friends
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
              <Card className='timelineCard' fluid>
                <Card.Content header='About Amy' />
                <Card.Content description={description} />
                <Card.Content extra>
                  <Icon name='user' />4 Friends
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ProfilePost;
