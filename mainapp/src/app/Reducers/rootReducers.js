import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import TestReducer from "../../Features/TestArea/TestReducer";
import ModalReducers from "../../Features/Modals/ModalReducers";
//import LoginAuthReducer from "../../Features/Auth/Login/LoginAuthReducer";
import AsyncReducer from "../../Features/Async/AsyncReducer";
import LoginAuthNewReducer from "../../Features/Auth/Login/LoginAuthNewReducer";
import productReducer from "../../Features/Timeline/postReducer";
import NewReducerNow from "../../Features/Timeline/NewReducerNow";

const rootReducer = combineReducers({
  test: TestReducer,
  form: FormReducer,
  modals: ModalReducers,
  auth: LoginAuthNewReducer,
  async: AsyncReducer,
  post: productReducer,
  newpost: NewReducerNow
});

export default rootReducer;
