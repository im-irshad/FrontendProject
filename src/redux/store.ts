import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return reduxStore;
};

export default storeFactory;
