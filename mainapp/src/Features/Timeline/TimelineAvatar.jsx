import React from "react";
import { Comment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const TimelineAvatar = () => {
  return (
    <div>
      <Comment.Group>
        <Comment as={Link} to="/profile">
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default TimelineAvatar;
