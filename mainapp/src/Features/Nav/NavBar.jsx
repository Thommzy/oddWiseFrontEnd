import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Container } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.css";
import { openModal } from "../Modals/ModalActions";
import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";
import { logOut } from "../Auth/Login/LoginNewAction";

const actions = {
  openModal,
  logOut
};

const mapStateToProps = state => ({
  auth: state.auth,
  currentUser: state.auth.currentUser
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.history.push("/signin");
  };

  handleRegister = () => {
    this.props.history.push("/signup");
  };

  myProfile = () => {
    this.props.history.push("/profile");
  };

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/timeline");
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth.isAuthenticating;
    const token = localStorage.getItem("token");
    const localNumber = localStorage.getItem("phoneNumber");
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={Link} to="/timeline">
            <img src="assets/logo.png" alt="logo" />
            Odd-Wise
          </Menu.Item>
          {authenticated && (
            <Fragment>
              {/* <Menu.Item name="Test" as={Link} to="/test" />
              <Menu.Item name="Timeline" as={Link} to="/timeline" /> */}
              {/* <Menu.Item
                name="Profile"
                as={Link}
                to="/profile"
                onClick={() => console.log("ss")}
              /> */}
            </Fragment>
          )}
          {/* <Menu.Item>
            <Button floated='right' positive inverted content='Create Event' />
          </Menu.Item> */}
          {!token ? (
            <SignedOutMenu
              handleSignIn={this.handleSignIn}
              // register={this.handleRegister}
            />
          ) : (
            <SignedInMenu
              localNumber={localNumber}
              myprofile={this.myProfile}
              handleSignOut={this.handleSignOut}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(connect(mapStateToProps, actions)(NavBar));
