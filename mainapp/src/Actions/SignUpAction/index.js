import { SIGNUP } from "../../Constants";

const signupLoading = data => ({
  type: SIGNUP.LOADING,
  data
});

const signupSuccess = payload => ({
  type: SIGNUP.SUCCESS,
  payload
});

const signupErrors = error => ({
  type: SIGNUP.FAIL,
  error
});

export { signupLoading, signupSuccess, signupErrors };
