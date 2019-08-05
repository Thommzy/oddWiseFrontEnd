import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class FloatButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      unmountonclose: true
    };

    this.toggle = this.toggle.bind(this);
    this.changeUnmountonclose = this.changeUnmountonclose.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  changeUnmountonclose(e) {
    let value = e.target.value;
    this.setState({ unmountonclose: JSON.parse(value) });
  }

  render() {
    return (
      <div>
        <Form inline onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <Label for='unmountonclose'>Unmountonclose value</Label>{" "}
          </FormGroup>{" "}
          <Fab color='primary' aria-label='Add' onClick={this.toggle}>
            <AddIcon />{" "}
          </Fab>
        </Form>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          unmountonclose={this.state.unmountonclose}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Input
              type='textarea'
              placeholder='Write something (data should remain in modal if unmountonclose is set to false)'
              rows={5}
            />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color='secondary' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default FloatButton;
