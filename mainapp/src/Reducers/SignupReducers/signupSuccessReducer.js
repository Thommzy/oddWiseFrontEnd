import { SIGNUP } from "../../Constants";

const signupSuccessReducer = (state = null, action) => {
  if (action.type === SIGNUP.SUCCESS) {
    return { state: true, ...action.payload };
  }
  return state;
};

export default signupSuccessReducer;
