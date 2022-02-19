import { combineReducers } from "redux";
import countryReducer from "./countryReducer";
import favouriteReducer from "./favouriteReducer";
import themeReducer from "./themeReducer";
import photoReducer from "./photoReducer";
import sortingReducer from "./sortingReducer";
const rootReducer = combineReducers({
  countryReducer,
  themeReducer,
  favouriteReducer,
  photoReducer,
  sortingReducer,
});
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
