export const FETCH_PROFILE_POST_BEGIN = "FETCH_PROFILE_POST_BEGIN";
export const FETCH_PROFILE_POST_SUCCESS = "FETCH_PROFILE_POST_SUCCESS";
export const FETCH_PROFILE_POST_FAILURE = "FETCH_PROFILE_POST_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PROFILE_POST_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PROFILE_POST_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PROFILE_POST_FAILURE,
  payload: { error }
});

const x = localStorage.getItem("authToken");
const headers = {
  "Content-Type": "application/json",
  "x-auth": x
};

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export function fetchProfileProducts() {
  return async dispatch => {
    dispatch(fetchProductsBegin());
    await delay(3000);
    try {
      const response = await fetch(
        "https://oddwyse.herokuapp.com/api/v1/post/personal",
        {
          headers: headers
        }
      );
      const res = await response;
      const json = res.json();
      //console.log(json);
      json.then(a => {
        //console.log(a.post);
        // this.setState({
        //   items: a.post
        // });
        console.log(a);
        console.log(a.post);
        dispatch(fetchProductsSuccess(a.post));
        return a.post;
      });

      // console.log(json);
    } catch (error) {
      return dispatch(fetchProductsFailure(error));
    }
  };
}
