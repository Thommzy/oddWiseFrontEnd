import { SIGNUP } from "../../Constants";

const signupLoadingReducers = (state = false, action) => {
  switch (action.type) {
    case SIGNUP.LOADING:
      return { state: true, action };
    case SIGNUP.SUCCESS:
      return false;
    case SIGNUP.FAIL:
      return false;
    default:
      return state;
  }
};

export default signupLoadingReducers;
