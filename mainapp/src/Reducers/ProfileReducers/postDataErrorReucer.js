import { POSTDATA } from "../../Constants";

const postDataErrorReducer = (state = null, action) => {
  switch (action.type) {
    case POSTDATA.LOADING:
      return null;
    case POSTDATA.SUCCESS:
      return null;
    case POSTDATA.FAIL:
      return action.error;
    default:
      return state;
  }
};

export default postDataErrorReducer;
