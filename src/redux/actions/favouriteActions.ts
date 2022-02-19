import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./actionConsts";
import { AllActions } from "../../types";
import { Country } from "../../types";

export function addToFavourite(addCountry: Country): AllActions {
  return {
    type: ADD_FAVOURITE,
    payload: {
      addCountry,
    },
  };
}

export function removeFavourite(rmvCountry: Country): AllActions {
  return {
    type: REMOVE_FAVOURITE,
    payload: {
      rmvCountry,
    },
  };
}
