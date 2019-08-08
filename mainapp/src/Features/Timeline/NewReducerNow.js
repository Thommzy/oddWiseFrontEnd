import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from "../TestArea/TestConstants";
import { createReducer } from "../../app/Common/util/ReducerUtils";
// import { FETCH_POST } from "./postConstants";

const initialState = [];

// const TestReducer = (state = initialState, actions) => {
//   switch (actions.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };

const incrementCounter = state => {
  return { ...state, data: state.data + 1 };
};

const decrementCounter = state => {
  return { ...state, data: state.data - 1 };
};

// const fetchPosts = (state, payload) => {
//   return payload.posts;
// };

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
  // [FETCH_POST]: fetchPosts
});
