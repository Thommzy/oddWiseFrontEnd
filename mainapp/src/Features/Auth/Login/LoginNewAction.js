import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "./LoginConstants";
import { closeModal } from "../../Modals/ModalActions";
const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

//  const a = "2" + 2 - 2;
//console.log(a);
export const login = ({ email, password }, history) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        email,
        password
      }
    });
    axios
      .post("https://oddwyse.herokuapp.com/api/v1/user/login", {
        email,
        password,
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        console.log(res);
        localStorage.authToken = res.data.token;
        console.log(res.data);
        history.push("/timeline");
        dispatch(closeModal());

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            email
          }
        });
      })

      .catch(err => {
        console.log(err.response);
        dispatch({
          type: LOGIN_FAILURE,
          payload: "Invalid email or password"
        });
      });
  };
};

export const logOut = () => {
  localStorage.clear();
  delete localStorage.state;
  return { type: LOGOUT };
};
