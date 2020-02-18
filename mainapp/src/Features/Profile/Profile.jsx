import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import ProfileImageSection from "./ProfileImageSection";
import "./Profile.css";
import ProfileDetails from "./ProfileDetails";
import ProfilePost from "./ProfilePost";
import ProfileOthers from "./ProfileOthers";
import NavBar from "../Nav/NavBar";

export default class Profile extends Component {
  render() {
    return (
      <Container fluid>
        <NavBar />
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
