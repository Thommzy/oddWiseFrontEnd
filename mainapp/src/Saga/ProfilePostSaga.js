import { takeEvery, call, put } from "redux-saga/effects";
import { PROFILE } from "../Constants";
import { fetchProfilePost } from "../Api";
import { setProfile, setErrors } from "../Actions/ProfileActions";

function* handleProfilePostLoad() {
  try {
    // resolve
    const profilePost = yield call(fetchProfilePost);
    yield put(setProfile(profilePost));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.toString()));
  }
}

export default function* watchProfilePostLoads() {
  yield takeEvery(PROFILE.LOADING, handleProfilePostLoad);
}
