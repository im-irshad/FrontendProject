import { DARK_MODE } from "./actionConsts";
import { AllActions } from "../../types";

export function darkMode(mode: Boolean): AllActions {
  return {
    type: DARK_MODE,
    payload: mode,
  };
}
