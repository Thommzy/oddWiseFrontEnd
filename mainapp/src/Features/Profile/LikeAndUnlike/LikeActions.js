import { LIKE_POST } from "./LikeConstants";
import axios from "axios";

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const apiUrl = "https://oddwyse.herokuapp.com/api/v1/post";

const x = localStorage.getItem("authToken");
const header = {
  "Content-Type": "application/json",
  "x-auth": x
};

export const likePostSuccess = id => {
  return {
    type: LIKE_POST,
    payload: {
      id
    }
  };
};

export const likePost = id => {
  const pId = localStorage.getItem("pointPost");
  //console.log(this.props.id);
  return async dispatch => {
    try {
      const response = await axios.post(`${apiUrl}/like/${pId}`, {
        headers: header
      });
      dispatch(likePostSuccess(response.data));
      await delay(1000);
      dispatch(window.location.reload(true));
    } catch (error) {
      throw error;
    }
  };
};
