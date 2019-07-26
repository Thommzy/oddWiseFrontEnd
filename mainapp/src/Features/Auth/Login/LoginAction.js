import axios from "axios";

export const AUTHENTICATED = "authenticated_user";
export const UNAUTHENTICATED = "unauthenticated_user";
export const AUTHENTICATION_ERROR = "authentication_error";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
const URL = "https://oddwyse.herokuapp.com/api/v1/user";
export function signInAction({ email, password }, history) {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/login`, { email, password });
      console.log(res);
      console.log(res.data.error);
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem("user", res.data.user.apikey);
      history.push("/timeline");
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
}

export const logOut = () => {
  return {
    type: SIGN_OUT_USER
  };
};

//bUsnLWdLiXVfkByCgDaSdgnSGqFIkBBnBuOywBohlHAgVtIdGKGAlhvQSSGemRVBjgwCgj

//bUsnLWdLiXVfkByCgDaSdgnSGqFIkBBnBuOywBohlHAgVtIdGKGAlhvQSSGemRVBjgwCgj
