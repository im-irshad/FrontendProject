import { AllActions } from "../../types";
import { Country } from "../../types";

type InitialState = {
  mode: Boolean;
};

const initialState: InitialState = {
  mode: false,
};
export default function themeReducer(
  state = initialState,
  themeActions: AllActions
): InitialState {
  switch (themeActions.type) {
    case "DARK_MODE": {
      return {
        ...state,
        mode: !state.mode,
      };
    }
    default:
      return state;
  }
}
