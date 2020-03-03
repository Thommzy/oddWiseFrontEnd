import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedInMenu = ({ handleSignOut, localNumber, myprofile }) => {
  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
      />
      <Dropdown pointing="top left" text={localNumber}>
        <Dropdown.Menu>
          {/* <Dropdown.Item text='Create Event' icon='plus' />
          <Dropdown.Item text='My Events' icon='calendar' />
          <Dropdown.Item text='My Network' icon='users' /> */}
          <Dropdown.Item onClick={myprofile} text="My Profile" icon="user" />
          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
          />
          <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
