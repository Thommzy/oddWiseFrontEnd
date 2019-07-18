import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { openModal } from "../Modals/ModalActions";
import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";

const actions = {
  openModal
};

class NavBar extends Component {
  state = {
    authenticated: false
  };
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push("/");
  };
  render() {
    const { autheticated } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item header as={Link} to='/'>
            <img src='assets/logo.png' alt='logo' />
            Odd-Wise
          </Menu.Item>
          <Menu.Item name='Test' as={Link} to='/test' />
          <Menu.Item name='Timeline' as={Link} to='/timeline' />
          {/* <Menu.Item>
            <Button floated='right' positive inverted content='Create Event' />
          </Menu.Item> */}
          {autheticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
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
  null,
  actions
)(NavBar);
