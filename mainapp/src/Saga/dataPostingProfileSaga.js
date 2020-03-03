import { takeEvery, call, put } from "redux-saga/effects";
import { POSTDATA } from "../Constants";
import { dataPosting } from "../Api";
import { setErrors, setData } from "../Actions/PostDataActions";

function* handleDataPostingLoad(postData) {
  const { trackHistory } = postData.data;
  console.log(trackHistory);
  console.log(postData.data);
  try {
    //resolve
    const allPost = yield call(dataPosting, postData.data);
    yield put(setData(allPost));
    trackHistory.push("/profile");
    console.log("run");
  } catch (error) {
    //reject
    yield put(setErrors(error.toString()));
  }
}

export default function* watchdataPostingLoads() {
  yield takeEvery(POSTDATA.LOADING, handleDataPostingLoad);
}
