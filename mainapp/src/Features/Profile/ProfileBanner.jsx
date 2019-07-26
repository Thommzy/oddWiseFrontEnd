import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import "./Profile.css";

class ProfileBanner extends Component {
  render() {
    return (
      <Segment className='profileBanner'>
        <h1>porfile picture</h1>
      </Segment>
    );
  }
}

export default ProfileBanner;
