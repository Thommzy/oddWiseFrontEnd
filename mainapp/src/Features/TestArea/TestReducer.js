import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./TestConstants";
import { createReducer } from "../../app/Common/util/ReducerUtils";

const initialState = {
  data: 42,
  first_name: "",
  last_name: "",
  email: "",
  mobile_no: "",
  password: ""
};

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

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});
