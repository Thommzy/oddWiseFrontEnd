export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});
// const delay = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

export function fetchProducts() {
  return async dispatch => {
    dispatch(fetchProductsBegin());
    try {
      const response = await fetch(
        "https://oddwyse.herokuapp.com/api/v1/post/allPost"
      );
      const res = await response;
      const json = res.json();
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

      console.log(json);
    } catch (error) {
      return dispatch(fetchProductsFailure(error));
    }
  };
}
