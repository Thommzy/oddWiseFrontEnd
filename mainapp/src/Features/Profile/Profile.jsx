import React, { Component } from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import ProfileImageSection from "./ProfileImageSection";
import "./Profile.css";
import ProfileDetails from "./ProfileDetails";
import ProfilePost from "./ProfilePost";
import ProfileOthers from "./ProfileOthers";

export default class Profile extends Component {
  render() {
    return (
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <ProfileImageSection />
              <ProfileDetails />
              <ProfileOthers />
            </Grid.Column>
            <Grid.Column width={13}>
              <ProfilePost />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
