import React, { Component } from "react";
import ProfileBanner from "./ProfileBanner";
import { Grid, Image } from "semantic-ui-react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ProfileBanner />
      </div>
    );
  }
}
