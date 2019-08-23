import { LIKE_POST } from "./LikeConstants";
import axios from "axios";

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const apiUrl = "https://oddwyse.herokuapp.com/api/v1/post";

const token = localStorage.getItem("authToken");
const header = {
  "Content-Type": "application/json",
  "x-auth": token
};

export const likePost = id => {
  const pId = localStorage.getItem("pointPost");
  // console.log(token);
  //console.log(this.props.id);
  return async dispatch => {
    try {
      const response = await axios.post(
        `${apiUrl}/like/${pId}`,
        { id },
        {
          headers: header
        }
      );
      dispatch(likePostSuccess(response.data));
      console.log(response.data);
      await delay(1000);
      //dispatch(window.location.reload(true));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const likePostSuccess = id => {
  return {
    type: LIKE_POST,
    payload: {
      id: id._id
    }
  };
};
