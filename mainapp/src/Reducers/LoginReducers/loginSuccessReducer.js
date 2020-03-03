import { LOGIN } from "../../Constants";

const loginSuccessReducer = (state = null, action) => {
  if (action.type === LOGIN.SUCCESS) {
    return { state: true, ...action.payload };
  }
  return state;
};

export default loginSuccessReducer;
