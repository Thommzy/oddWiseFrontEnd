import { SIGNUP } from "../../Constants";

const signupErrorReducers = (state = null, action) => {
  switch (action.type) {
    case SIGNUP.LOADING:
      return null;
    case SIGNUP.SUCCESS:
      return null;
    case SIGNUP.FAIL:
      return action.error;
    default:
      return state;
  }
};

export default signupErrorReducers;
