import React, { Component } from "react";
import "../Shimmer/Shimmer.css";
import { Container } from "semantic-ui-react";

export default class Shimmer extends Component {
  render() {
    return (
      <Container fluid>
        <div className='card br'>
          <div className='wrapper'>
            <div className='profilePic animate' />
            <div className='comment br animate w80' />
            <div className='comment br animate' />
            <div className='comment br animate' />
          </div>
        </div>
      </Container>
    );
  }
}
