import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import TestReducer from "../../Features/TestArea/TestReducer";
import ModalReducers from "../../Features/Modals/ModalReducers";
//import LoginAuthReducer from "../../Features/Auth/Login/LoginAuthReducer";
import AsyncReducer from "../../Features/Async/AsyncReducer";
import LoginAuthNewReducer from "../../Features/Auth/Login/LoginAuthNewReducer";
import productReducer from "../../Features/Timeline/postReducer";
import NewReducerNow from "../../Features/Timeline/NewReducerNow";
import profilePostReducer from "../../Features/Profile/ProfilePostReducers";
import profilefetchReducer from "../../Features/Profile/ProfileFetchPostReducer";

const rootReducer = combineReducers({
  test: TestReducer,
  form: FormReducer,
  modals: ModalReducers,
  auth: LoginAuthNewReducer,
  async: AsyncReducer,
  post: productReducer,
  fhpost: profilefetchReducer,
  newpost: NewReducerNow,
  addpost: profilePostReducer
});

export default rootReducer;
