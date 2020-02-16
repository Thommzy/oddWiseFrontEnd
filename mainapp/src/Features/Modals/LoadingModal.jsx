import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal } from "./ModalActions";
import LoginLoaderInfo from "../Auth/Login/LoginLoaderInfo";

const actions = { closeModal };

class LoadingModal extends Component {
  render() {
    return (
      <div>
        <Modal size="mini" open={true} onClose={this.props.closeModal}>
          <LoginLoaderInfo />
        </Modal>
      </div>
    );
  }
}

export default connect(null, actions)(LoadingModal);
