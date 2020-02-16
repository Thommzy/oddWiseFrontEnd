import { createReducer } from "../../../app/Common/util/ReducerUtils";
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from "./LoginConstants";

const initialState = {
  errorMessage: null,
  isAuthenticating: false,
  currentUser: null,
  loading: false
};

const loginRequest = (state, payload) => {
  return {
    ...state,
    isAuthenticating: true,
    loading: true,
    currentUser: payload.email
  };
};

const logOutUser = state => {
  return {
    ...state,
    isAuthenticating: false,
    currentUser: null,
    loading: false,
    errorMessage: null
  };
};

const loginSuccess = (state, payload) => {
  return {
    ...state,
    isAuthenticating: true,
    loading: false,
    currentUser: payload.emailorusername
  };
};

const loginFailure = (state, payload) => {
  return {
    ...state,
    isAuthenticating: false,
    loading: false,
    errorMessage: payload
  };
};

export default createReducer(initialState, {
  [LOGIN_REQUEST]: loginRequest,
  [LOGIN_FAILURE]: loginFailure,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGOUT]: logOutUser
});
