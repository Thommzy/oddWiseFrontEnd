import React from "react";
import ReactDOM from "react-dom";
import "../src/app/layout/css/home.css";
import "./index.css";
import App from "./app/layout/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ConfigureStore } from "./app/Store/ConfigureStore";
import { fetchProducts } from "./Features/Timeline/postActions";

const store = ConfigureStore();
store.dispatch(fetchProducts());

console.log(store.getState());

const rootEl = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    setTimeout(render);
  });
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
