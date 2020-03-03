import { LOGIN } from "../../Constants";

const loginErrorReducers = (state = null, action) => {
  switch (action.type) {
    case LOGIN.LOADING:
      return null;
    case LOGIN.SUCCESS:
      return null;
    case LOGIN.FAIL:
      return action.error;
    default:
      return state;
  }
};

export default loginErrorReducers;
