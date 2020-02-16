import React from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";

const ErrorNotification = () => {
  const alert = useAlert();

  return (
    <button
      onClick={() => {
        alert.show("Oh look, an alert!");
      }}
    >
      Show Alert
    </button>
  );
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps)(ErrorNotification);
