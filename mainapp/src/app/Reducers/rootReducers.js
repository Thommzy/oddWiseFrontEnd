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
import ProfileFetchReducer from "../../Features/Profile/ProfileFetchData/ProfileFetchReducer";
import loadingReducers from "../../Reducers/loadingReducers";
import postReducers from "../../Reducers/postsReducers";
import errorReducers from "../../Reducers/errorReducers";
import loginLoadingReducers from "../../Reducers/LoginReducers/loginLoadingReducer";
import loginSuccessReducer from "../../Reducers/LoginReducers/loginSuccessReducer";
import loginErrorReducers from "../../Reducers/LoginReducers/loginErrorReducer";
import signupLoadingReducers from "../../Reducers/SignupReducers/signupLoadingReducer";
import signupSuccessReducer from "../../Reducers/SignupReducers/signupSuccessReducer";
import signupErrorReducers from "../../Reducers/SignupReducers/signupErrorReducer";
import profileLoadingReducers from "../../Reducers/ProfileReducers/profileLoadingReducer";
import profileSuccessReducers from "../../Reducers/ProfileReducers/profileSuccessReducer";
import profileErrorReducers from "../../Reducers/ProfileReducers/profileErrorReducer";
import postDataLoadingReducers from "../../Reducers/ProfileReducers/postDataLoadingReducer";
import postDataSuccessReducers from "../../Reducers/ProfileReducers/postDataSuccessReducer";
import postDataErrorReducer from "../../Reducers/ProfileReducers/postDataErrorReucer";

const rootReducer = combineReducers({
  test: TestReducer,
  form: FormReducer,
  modals: ModalReducers,
  auth: LoginAuthNewReducer,
  async: AsyncReducer,
  post: productReducer,
  newpost: NewReducerNow,
  addpost: profilePostReducer,
  profileFetchReducer: ProfileFetchReducer,
  postLoading: loadingReducers,
  postSuccess: postReducers,
  postError: errorReducers,
  loginLoading: loginLoadingReducers,
  loginSuccess: loginSuccessReducer,
  loginError: loginErrorReducers,
  signupLoading: signupLoadingReducers,
  signupSuccess: signupSuccessReducer,
  signupError: signupErrorReducers,
  profileLoading: profileLoadingReducers,
  profileSuccess: profileSuccessReducers,
  profileError: profileErrorReducers,
  postDataInProfileLoading: postDataLoadingReducers,
  postDataInProfileSuccess: postDataSuccessReducers,
  postDataInProfileError: postDataErrorReducer
});

export default rootReducer;
