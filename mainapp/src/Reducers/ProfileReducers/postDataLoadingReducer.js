import { POSTDATA } from "../../Constants";

const postDataLoadingReducers = (state = false, action) => {
  switch (action.type) {
    case POSTDATA.LOADING:
      return true;
    case POSTDATA.SUCCESS:
      return false;
    case POSTDATA.FAIL:
      return false;
    default:
      return state;
  }
};

export default postDataLoadingReducers;
