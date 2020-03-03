import { POST } from "../Constants";

const errorReducers = (state = null, action) => {
  switch (action.type) {
    case POST.LOAD:
      return null;
    case POST.LOAD_FAIL:
      return action.error;
    case POST.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducers;
