import { takeEvery, call, put } from "redux-saga/effects";
import { SIGNUP } from "../Constants";
import { sigupCall } from "../Api";
import { signupSuccess, signupErrors } from "../Actions/SignUpAction";

function* handleAppSignup(signupData) {
  console.log(signupData.data);
  let mainSignup;
  try {
    mainSignup = yield call(sigupCall, signupData.data);
    yield put(signupSuccess(mainSignup));
    console.log(signupData);
  } catch (error) {
    //dispatch errors
    yield put(signupErrors(error.toString()));
  }
}

export default function* watchSignuploads() {
  yield takeEvery(SIGNUP.LOADING, handleAppSignup);
}
