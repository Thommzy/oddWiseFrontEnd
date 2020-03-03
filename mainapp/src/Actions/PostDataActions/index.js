import { POSTDATA } from "../../Constants";

const loadData = data => ({
  type: POSTDATA.LOADING,
  data
});

const setData = posts => ({
  type: POSTDATA.SUCCESS,
  posts
});

const setErrors = error => ({
  type: POSTDATA.FAIL,
  error
});

export { loadData, setData, setErrors };
