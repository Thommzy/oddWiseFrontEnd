import { createReducer } from '../../../app/Common/util/ReducerUtils';
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from './LoginConstants';

const initialState = {
  errorMessage: null,
  isAuthenticating: false,
  currentUser: null
};

const loginRequest = (state, payload) => {
  return {
    ...state,
    isAuthenticating: true,
    currentUser: payload.email
  };
};

const logOutUser = state => {
  return {
    ...state,
    isAuthenticating: false,
    currentUser: null,
    errorMessage: null
  };
};

const loginSuccess = (state, payload) => {
  return {
    ...state,
    isAuthenticating: true,
    currentUser: payload.emailorusername
  };
};

const loginFailure = (state, payload) => {
  return {
    ...state,
    isAuthenticating: false,
    errorMessage: payload
  };
};

export default createReducer(initialState, {
  [LOGIN_REQUEST]: loginRequest,
  [LOGIN_FAILURE]: loginFailure,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGOUT]: logOutUser
});
