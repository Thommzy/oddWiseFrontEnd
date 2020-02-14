export const FETCH_PROFILE_POST_BEGIN = "FETCH_PROFILE_POST_BEGIN";
export const FETCH_PROFILE_POST_SUCCESS = "FETCH_PROFILE_POST_SUCCESS";
export const FETCH_PROFILE_POST_FAILURE = "FETCH_PROFILE_POST_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PROFILE_POST_BEGIN
});

export const fetchProductsSuccess = profile => ({
  type: FETCH_PROFILE_POST_SUCCESS,
  payload: { profile }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PROFILE_POST_FAILURE,
  payload: { error }
});

//const x =
//("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDNhZDAxNmM5YTE3MDVhMDgwYzYyN2EiLCJlbWFpbCI6InVzZXJvbmVAZ21haWwuY29tIiwibW9iaWxlX25vIjoiMDcwMzEyMzQ1NjciLCJmb2xsb3dpbmciOltdLCJmb2xsb3dlcnMiOltdLCJpYXQiOjE1NjkyMzM4ODUsImV4cCI6MTU2OTMyMDI4NX0.DNT_52wareT06eql2SRXIXbJkN-tIojx8-m07WePOMw");

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export function fetchProfileProducts() {
  return async dispatch => {
    const x = localStorage.getItem("authToken");
    const headers = {
      "Content-Type": "application/json",
      Authorization: x
    };
    dispatch(fetchProductsBegin());
    await delay(1000);
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
        console.log(a);
        console.log(a.post);
        dispatch(fetchProductsSuccess(a.post));
        return a.post;
      });
    } catch (error) {
      return dispatch(fetchProductsFailure(error));
    }
  };
}
