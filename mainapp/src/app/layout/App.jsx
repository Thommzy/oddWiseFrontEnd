import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "../../Features/Home/Home";
import { Container } from "semantic-ui-react";
import signUp from "../../Features/SignUp/signUp";
import NavBar from "../../Features/Nav/NavBar";
import TestComponent from "../../Features/TestArea/TestComponent";
import ModalManager from "../../Features/Modals/ModalManager";
import Timeline from "../../Features/Timeline/Timeline";
import Profile from "../../Features/Profile/Profile";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path='/' component={Home} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Route exact path='/signup' component={signUp} />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/test' component={TestComponent} />
                  <Route exact path='/timeline' component={Timeline} />
                  <Route exact path='/profile' component={Profile} />
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
