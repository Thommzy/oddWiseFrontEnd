import React, { Component } from "react";
import { Loader, Dimmer } from "semantic-ui-react";

export default class LoginLoaderInfo extends Component {
  render() {
    return (
      <div>
        <Dimmer active>
          <Loader indeterminate>Log In....</Loader>
        </Dimmer>
        {/* <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer> */}
      </div>
    );
  }
}
