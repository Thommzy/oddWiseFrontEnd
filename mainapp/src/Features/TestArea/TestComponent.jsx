import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./TestActions";
import { Button } from "semantic-ui-react";
import { openModal } from "../Modals/ModalActions";

const mapStateToProps = state => ({
  data: state.test.data
});

const mapActionsToProps = {
  incrementCounter,
  decrementCounter,
  openModal
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <div>
        <h1>Test Compont</h1>
        <h3>The Answer is {data}</h3> 
        <Button onClick={incrementCounter} positive content='Increment' />
        <Button onClick={decrementCounter} negative content='Decrement' />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color='teal'
          content='Open Modal'
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TestComponent);
