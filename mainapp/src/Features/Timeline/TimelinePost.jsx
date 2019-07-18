import React from "react";
import { Card, Icon, Container, Grid } from "semantic-ui-react";

const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York."
].join(" ");

const TimelinePost = () => (
  <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <Card className='timelineCard' fluid>
            <Card.Content header='About Amy' />
            <Card.Content description={description} />
            <Card.Content extra>
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
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
  </Container>
);

export default TimelinePost;
