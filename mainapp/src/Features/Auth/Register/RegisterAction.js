import axios from "axios";
import { closeModal } from "../../Modals/ModalActions";

export const AUTHENTICATED = "authenticated_user";
export const UNAUTHENTICATED = "unauthenticated_user";
export const AUTHENTICATION_ERROR = "authentication_error";
export const SIGN_OUT_USER = "SIGN_OUT_USER";
const URL = "https://oddwyse.herokuapp.com/api/v1/user";
export function RegisterAction(
  { first_name, last_name, email, mobile_no, password },
  history
) {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/signup`, {
        first_name,
        last_name,
        email,
        mobile_no,
        password
      });
      dispatch({ type: AUTHENTICATED });
      console.log(res.data);
      localStorage.setItem("user", res.data.reguser.apikey);
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

export const logOut = () => {
  return {
    type: SIGN_OUT_USER
  };
};
