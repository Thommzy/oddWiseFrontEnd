import { connect } from "react-redux";
import { createPost } from "./ProfilePostAction";
import ProfilePostTextArea from "./ProfilePostTextArea";

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProfilePostTextArea);
