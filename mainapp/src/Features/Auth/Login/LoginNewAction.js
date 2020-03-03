import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "./LoginConstants";
import { closeModal, openModal } from "../../Modals/ModalActions";
import { BASE_URL } from "../../../Config";

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const loadingDelay = history => {
  return async dispatch => {
    dispatch(openModal("LoadingModal"));
    await delay(1000);
    dispatch(closeModal());
  };
};

export const login = ({ emailorusername, password }, history) => {
  return async dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: {
        emailorusername,
        password
      }
    });
    axios
      .post(`${BASE_URL}user/login`, {
        emailorusername,
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
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            emailorusername
          }
        });
      })

      .catch(err => {
        // console.log(err.response);
        dispatch({
          type: LOGIN_FAILURE,
          payload: err.response.data.password
        });
      });
  };
};

export const logOut = () => {
  localStorage.clear();
  delete localStorage.state;
  return { type: LOGOUT };
};
