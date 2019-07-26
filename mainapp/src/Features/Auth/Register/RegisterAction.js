export const userPostFetch = user => {
  return async dispatch => {
    const resp = await fetch(
      "https://oddwyse.herokuapp.com/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ user })
      }
    );
    const data = await resp.json();
    console.log(data);
    if (data.reguser) {
      // Here you should have logic to handle invalid creation of a user.
      // This assumes your Rails API will return a JSON object with a key of
      // 'message' if there is an error with creating the user, i.e. invalid username
    } else {
      localStorage.setItem("token", data.jwt);
      dispatch(loginUser(data.user));
    }
  };
};

const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
});
