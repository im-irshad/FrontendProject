import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer, { rootState } from "./reducers";

function toLS(state: rootState) {
  try {
    const lSState = JSON.stringify(state);
    localStorage.setItem("country", lSState);
  } catch (e) {
    console.log(e);
  }
}

function fromLS() {
  const lSState = localStorage.getItem("country");
  if (lSState === null) return undefined;
  return JSON.parse(lSState);
}
const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer,
    fromLS(),
    composeWithDevTools(applyMiddleware(...middleware))
  );

  reduxStore.subscribe(() => toLS(reduxStore.getState()));
  return reduxStore;
};

export default storeFactory;
