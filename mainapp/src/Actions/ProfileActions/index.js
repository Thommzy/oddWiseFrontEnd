import { PROFILE } from "../../Constants";

const loadProfile = () => ({
  type: PROFILE.LOADING
});

const setProfile = profile => ({
  type: PROFILE.SUCCESS,
  profile
});

const setErrors = error => ({
  type: PROFILE.FAIL,
  error
});

export { loadProfile, setProfile, setErrors };
