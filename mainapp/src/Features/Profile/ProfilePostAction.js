import { ADD_POST, FETCH_POST, DELETE_POST } from "./ProfilePostConstants";
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
      await delay(1000);
      // dispatch(window.location.reload(true));
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

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  };
};

export const deletePost = id => {
  const pId = localStorage.getItem("pointPost");
  return async dispatch => {
    try {
      const response = await axios.delete(`${apiUrl}/post/${pId}`, {
        headers: headers
      });
      dispatch(deletePostSuccess(response.data));
      await delay(1000);
      dispatch(window.location.reload(true));
    } catch (error) {
      throw error;
    }
  };
};
// export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
// export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
// export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

// export const fetchProductsBegin = () => ({
//   type: FETCH_PRODUCTS_BEGIN
// });

// export const fetchProductsSuccess = products => ({
//   type: FETCH_PRODUCTS_SUCCESS,
//   payload: { products }
// });

// export const fetchProductsFailure = error => ({
//   type: FETCH_PRODUCTS_FAILURE,
//   payload: { error }
// });

// export const fetchPostss = products => {
//   return {
//     type: FETCH_POST,
//     products
//   };
// };

// export const fetchPersonalPosts = () => {
//   return async dispatch => {
//     dispatch(fetchProductsBegin());
//     try {
//       const response = await fetch(`${apiUrl}/post/personal`, {
//         headers: headers
//       });
//       const res = await response;
//       const json = res.json();
//       json.then(a => {
//         //console.log(a.post);
//         // this.setState({
//         //   items: a.post
//         // });
//         console.log(a);
//         console.log(a.post);
//         dispatch(fetchProductsSuccess(a.post));
//         return a.post;
//       });
//     } catch (error) {
//       return dispatch(fetchProductsFailure(error));
//     }
//   };
// };
