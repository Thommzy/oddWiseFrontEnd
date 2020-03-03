import { PROFILE } from "../../Constants";

const profileErrorReducers = (state = null, action) => {
  switch (action.type) {
    case PROFILE.LOADING:
      return null;
    case PROFILE.SUCCESS:
      return null;
    case PROFILE.FAIL:
      return action.error;
    default:
      return state;
  }
};

export default profileErrorReducers;
