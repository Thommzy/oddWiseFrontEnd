import axios from "axios";
import { closeModal } from "../../Modals/ModalActions";

export const AUTHENTICATED = "authenticated_user";
export const UNAUTHENTICATED = "unauthenticated_user";
export const AUTHENTICATION_ERROR = "authentication_error";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
const URL = "https://oddwyse.herokuapp.com/api/v1/user";
export function signInAction({ emailorusername, password }, history) {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/login`, {
        emailorusername,
        password
      });
      dispatch({ type: AUTHENTICATED });
      localStorage.setItem("user", res.data._id);
      console.log(res);
      history.push("/timeline");
      dispatch(closeModal());
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
      });
    }
  };
}

export function logOut() {
  localStorage.clear();
  return {
    type: UNAUTHENTICATED
  };
}
//bUsnLWdLiXVfkByCgDaSdgnSGqFIkBBnBuOywBohlHAgVtIdGKGAlhvQSSGemRVBjgwCgj

//bUsnLWdLiXVfkByCgDaSdgnSGqFIkBBnBuOywBohlHAgVtIdGKGAlhvQSSGemRVBjgwCgj
