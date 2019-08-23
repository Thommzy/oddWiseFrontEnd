import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./TestActions";
import { Button } from "semantic-ui-react";
import { openModal } from "../Modals/ModalActions";

const mapStateToProps = state => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const mapActionsToProps = {
  incrementAsync,
  decrementAsync,
  openModal
};

class TestComponent extends Component {
  render() {
    const {
      data,
      decrementAsync,
      incrementAsync,
      openModal,
      loading,
      buttonName
    } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The Answer is {data}</h3>
        <Button
          loading={buttonName === "increment" && loading}
          name='increment'
          onClick={e => incrementAsync(e.target.name)}
          positive
          content='Increment'
        />
        <Button
          loading={buttonName === "decrement" && loading}
          name='decrement'
          onClick={e => decrementAsync(e.target.name)}
          negative
          content='Decrement'
        />
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
