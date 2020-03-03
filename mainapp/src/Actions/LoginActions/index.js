import { LOGIN } from "../../Constants";

const loginloading = data => ({
  type: LOGIN.LOADING,
  data
});

const loginSuccess = payload => ({
  type: LOGIN.SUCCESS,
  payload
});

const loginErrors = error => ({
  type: LOGIN.FAIL,
  error
});

export { loginloading, loginSuccess, loginErrors };
