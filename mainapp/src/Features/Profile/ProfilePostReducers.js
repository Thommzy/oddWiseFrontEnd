import { ADD_POST, DELETE_POST } from "./ProfilePostConstants";

export default function profilePostReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post._id !== action.payload.id);
    default:
      return state;
  }
}
