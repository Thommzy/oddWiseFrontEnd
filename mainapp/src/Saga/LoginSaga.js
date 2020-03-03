import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN } from "../Constants";
import { loginErrors, loginSuccess } from "../Actions/LoginActions";
import { loginCall } from "../Api";

function* handleAppLogin(loginData) {
  const { history } = loginData.data;
  console.log(loginData.data);
  let mainLogin;
  try {
    mainLogin = yield call(loginCall, loginData.data);
    yield put(loginSuccess(mainLogin));
    history.push("/timeline");
    console.log(loginData);
  } catch (error) {
    //dispatch error
    yield put(loginErrors(error.toString()));
  }
}

//watcher saga
export default function* watchLoginloads() {
  yield takeEvery(LOGIN.LOADING, handleAppLogin);
}
