import { POST } from "../Constants";

const loadPosts = () => ({
  type: POST.LOAD
});

const setPosts = posts => ({
  type: POST.LOAD_SUCCESS,
  posts
});

const setErrors = error => ({
  type: POST.LOAD_FAIL,
  error
});

export { loadPosts, setPosts, setErrors };
