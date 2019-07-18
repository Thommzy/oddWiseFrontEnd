import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import TestReducer from "../../Features/TestArea/TestReducer";
import ModalReducers from "../../Features/Modals/ModalReducers";

const rootReducer = combineReducers({
  test: TestReducer,
  form: FormReducer,
  modals: ModalReducers
});

export default rootReducer;
