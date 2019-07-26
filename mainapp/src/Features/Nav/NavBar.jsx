import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { openModal } from "../Modals/ModalActions";
import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";
import { logOut } from "../../Features/Auth/Login/LoginAction";

const actions = {
  openModal,
  logOut
};



function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.logOut();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    const authenticated = auth;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item header as={Link} to='/'>
            <img src='assets/logo.png' alt='logo' />
            Odd-Wise
          </Menu.Item>
          <Menu.Item name='Test' as={Link} to='/test' />
          <Menu.Item name='Timeline' as={Link} to='/timeline' />
          <Menu.Item name='Profile' as={Link} to='/profile' />
          {/* <Menu.Item>
            <Button floated='right' positive inverted content='Create Event' />
          </Menu.Item> */}
          {authenticated ? (
            <SignedInMenu
              signOut={this.handleSignOut}
              currentUser={auth.currentUser}
            />
          ) : (
            <SignedOutMenu
              signIn={this.handleSignIn}
              register={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(NavBar);
