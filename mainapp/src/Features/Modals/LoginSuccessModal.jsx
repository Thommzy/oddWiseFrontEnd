import React, { Component } from "react";
import LoginSuccess from "../Auth/Login/LoginSuccess";
import { Modal } from "semantic-ui-react";
import { closeModal } from "./ModalActions";
import { connect } from "react-redux";

const actions = { closeModal };

class LoginSuccessModal extends Component {
  render() {
    return (
      <div>
        <Modal size="mini" open={true} onClose={this.props.closeModal}>
          <LoginSuccess />
        </Modal>
      </div>
    );
  }
}

export default connect(null, actions)(LoginSuccessModal);
