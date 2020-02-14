import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../Reducers/rootReducers";
import thunk from "redux-thunk";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export const ConfigureStore = () => {
  const middlewares = [thunk];

  const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const persistedStorage = loadFromLocalStorage();
  const store = createStore(rootReducer, persistedStorage, composedEnhancer);

  store.subscribe(() => saveToLocalStorage(store.getState()));

  return store;
};
