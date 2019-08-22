import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

class DeleteButton extends Component {
  // handleClick(e) {
  //   e.preventDefault();
  //   console.log(this.props.personalPosts.products[0]._id);
  //   this.setState({ open: false });
  // }
  state = { open: false };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState(
      { closeOnEscape, closeOnDimmerClick, open: true },
      localStorage.setItem("pointPost", this.props.id)
    );
    // console.log(this.props.id);
  };

  close = () => this.setState({ open: false });

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;

    return (
      <div>
        {/* <Button color='red' onClick={this.closeConfigShow(false, true)}>
          Delete <Icon name='delete' />
        </Button> */}
        <Button color='red' onClick={this.closeConfigShow(true, false)}>
          Delete <Icon name='delete' />
        </Button>

        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>Delete This Post </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this post</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              No
            </Button>
            <Button
              onClick={this.props.onDelete}
              //close={this.props.close}
              // onClick={this.close}
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default DeleteButton;
