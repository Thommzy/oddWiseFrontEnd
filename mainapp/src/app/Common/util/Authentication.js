import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.Authentication) {
        this.props.addFlashMessage({
          type: "error",
          text: "You need to LOgin before accessing this page"
        });
        this.context.router.push("/");
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  Authentication.propTypes = {
    Authenticated: React.propTypes.boolean.isRequired
  };

  Authentication.contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      Authenticated: state.auth.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}
