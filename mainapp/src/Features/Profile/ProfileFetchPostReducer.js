import { FETCH_POST } from "./ProfilePostConstants";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function profilefetchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, loading: false, items: action.payload.posts };
    default:
      return state;
  }
}
