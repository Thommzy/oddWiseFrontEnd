import { LOGIN } from "../../Constants";

const loginLoadingReducers = (state = false, action) => {
  switch (action.type) {
    case LOGIN.LOADING:
      return { state: true, action };
    case LOGIN.SUCCESS:
      return false;
    case LOGIN.FAIL:
      return false;
    default:
      return state;
  }
};

export default loginLoadingReducers;
