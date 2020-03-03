import { POST } from "../Constants";

const loadingReducers = (state = false, action) => {
  switch (action.type) {
    case POST.LOAD:
      return true;
    case POST.LOAD_SUCCESS:
      return false;
    case POST.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducers;
