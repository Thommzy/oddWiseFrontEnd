import { POST } from "../Constants";

const postReducers = (state = [], action) => {
  if (action.type === POST.LOAD_SUCCESS) {
    return [...state, ...action.posts];
  }
  return state;
};

export default postReducers;
