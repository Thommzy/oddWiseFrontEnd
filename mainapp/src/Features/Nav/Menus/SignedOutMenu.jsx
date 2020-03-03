import React from "react";
import { Menu, Button } from "semantic-ui-react";
//import { Link } from "react-router-dom";

const SignedOutMenu = ({ handleSignIn }) => {
  return (
    <Menu.Item position="right">
      <Button onClick={handleSignIn} basic inverted content="Login" />
    </Menu.Item>
  );
};

export default SignedOutMenu;
