import { PROFILE } from "../../Constants";

const profileSuccessReducers = (state = [], action) => {
  if (action.type === PROFILE.SUCCESS) {
    return [...state, ...action.profile];
  }
  return state;
};

export default profileSuccessReducers;
