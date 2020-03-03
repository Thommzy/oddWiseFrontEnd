import { takeEvery, call, put } from "redux-saga/effects";
import { POST } from "../Constants";
import { fetchPosts } from "../Api";
import { setPosts, setErrors } from "../Actions";

function* handlePostLoad() {
  try {
    //dispatch resolve
    const allPost = yield call(fetchPosts);
    yield put(setPosts(allPost));
  } catch (error) {
    // dispatch reject
    yield put(setErrors(error.toString()));
  }
}

// watcher saga
export default function* watchPostLoads() {
  yield takeEvery(POST.LOAD, handlePostLoad);
}
