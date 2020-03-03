import React, { Component } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export default class LoginSuccess extends Component {
  render() {
    return (
      <div>
        <Dimmer active>
          <Loader indeterminate>Success....</Loader>
        </Dimmer>
      </div>
    );
  }
}
