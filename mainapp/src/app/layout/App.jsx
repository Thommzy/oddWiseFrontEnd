import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "../../Features/Home/Home";
import { Container } from "semantic-ui-react";
import signUp from "../../Features/SignUp/signUp";
import NavBar from "../../Features/Nav/NavBar";
import TestComponent from "../../Features/TestArea/TestComponent";
import ModalManager from "../../Features/Modals/ModalManager";
import Timeline from "../../Features/Timeline/Timeline";
import Profile from "../../Features/Profile/Profile";
import { fetchProfileProducts } from "../../Features/Profile/ProfileFetchData/ProfilefetchAction";
import SignIn from "../../Features/SignIn/SignIn";
//import { ProtectedRoute } from "./RequireAuth";
//import LoginForm from "../../Features/Auth/Login/LoginForm";

const checkAuth = () => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signup"
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path="/" component={Timeline} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <Route exact path="/signup" component={signUp} />
              <Route exact path="/signin" component={SignIn} />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/test" component={TestComponent} />
                  <Route exact path="/timeline" component={Timeline} />
                  <AuthRoute exact path="/profile" component={Profile} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
