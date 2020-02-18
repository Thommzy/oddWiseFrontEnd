import React, { Component } from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logOut } from "../Auth/Login/LoginNewAction";

const actions = {
  logOut
};

class ProfileOthers extends Component {
  handleSignOut = () => {
    this.props.logOut();
    this.props.history.push("/signin");
  };
  render() {
    return (
      <Segment className="profileOthers ">
        <Header as="h4">
          <Icon name="settings" />
          <Header.Content>Settings</Header.Content>
        </Header>
        <Header as="h4">
          <Icon name="share square outline" />
          <Header.Content onClick={this.handleSignOut}>Logout</Header.Content>
        </Header>
      </Segment>
    );
  }
}

export default withRouter(connect(null, actions)(ProfileOthers));
