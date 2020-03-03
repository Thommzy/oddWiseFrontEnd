import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducers/rootReducers";
import postSaga from "../../Saga";
import watchLoginloads from "../../Saga/LoginSaga";
import { RegisterAction } from "../../Features/Auth/Register/RegisterAction";
import watchSignuploads from "../../Saga/SignupSaga";
import watchProfilePostLoads from "../../Saga/ProfilePostSaga";
import watchdataPostingLoads from "../../Saga/dataPostingProfileSaga";

const ConfigureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(postSaga);
  sagaMiddleware.run(watchLoginloads);
  sagaMiddleware.run(watchSignuploads);
  sagaMiddleware.run(watchProfilePostLoads);
  sagaMiddleware.run(watchdataPostingLoads);
  return store;
};

export default ConfigureStore;
