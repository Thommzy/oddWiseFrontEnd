import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './LoginConstants';
import { closeModal } from '../../Modals/ModalActions';

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
      .post('https://oddwyse.herokuapp.com/api/v1/user/login', {
        emailorusername,
        password,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res => {
        console.log(res);
        localStorage.authToken = res.data.token;
        console.log(res.data);
        history.push('/timeline');
        dispatch(closeModal());

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            emailorusername
          }
        });
      })

      .catch(err => {
        console.log(err.response.data.password);
        dispatch({
          type: LOGIN_FAILURE,
          payload: 'Invalid Details'
        });
      });
  };
};

export const logOut = () => {
  localStorage.clear();
  delete localStorage.state;
  return { type: LOGOUT };
};
