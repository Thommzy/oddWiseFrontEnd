import { POSTDATA } from "../../Constants";

const postDataSuccessReducers = (state = [], action) => {
  if (action.type === POSTDATA.SUCCESS) {
    return { ...state, ...action.posts };
  }
  return state;
};

export default postDataSuccessReducers;
