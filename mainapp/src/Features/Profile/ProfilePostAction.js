import { ADD_POST } from "./ProfilePostConstants";
import axios from "axios";

const apiUrl = "https://oddwyse.herokuapp.com/api/v1";

const x = localStorage.getItem("authToken");
const headers = {
  "Content-Type": "application/json",
  "x-auth": x
};

export const createPost = ({ text }) => {
  return async dispatch => {
    try {
      const response = await axios.post(
        `${apiUrl}/post`,
        { text },
        {
          headers: headers
        }
      );
      dispatch(createPostSuccess(response.data));
    } catch (error) {
      throw error;
    }
  };
};

export const createPostSuccess = data => {
  return {
    type: ADD_POST,
    payload: {
      body: data.body,
      _id: data._id
    }
  };
};

// export const deletePostSuccess = id => {
//   return {
//     type: DELETE_POST,
//     payload: {
//       id
//     }
//   };
// };

// export const deletePost = id => {
//   return dispatch => {
//     return axios
//       .get(`${apiUrl}/delete/${id}`)
//       .then(response => {
//         dispatch(deletePostSuccess(response.data));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };

// export const fetchPosts = posts => {
//   return {
//     type: FETCH_POST,
//     posts
//   };
// };

// export const fetchAllPosts = () => {
//   return dispatch => {
//     return axios
//       .get(apiUrl)
//       .then(response => {
//         dispatch(fetchPosts(response.data));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };
