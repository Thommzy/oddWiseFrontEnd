import { PROFILE } from "../../Constants";

const profileLoadingReducers = (state = false, action) => {
  switch (action.type) {
    case PROFILE.LOADING:
      return true;
    case PROFILE.SUCCESS:
      return false;
    case PROFILE.FAIL:
      return false;
    default:
      return state;
  }
};

export default profileLoadingReducers;
