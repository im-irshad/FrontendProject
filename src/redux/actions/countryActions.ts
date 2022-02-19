import { Dispatch } from "redux";
import { Country } from "../../types";
import { AllActions } from "../../types";
import { loading, loadingSingleCountry } from "./loadingActions";

export function getCountries(countries: Country[]): AllActions {
  return {
    type: "GET_COUNTRIES",
    payload: {
      countries,
    },
  };
}

export function getCountry(country: Country[]): AllActions {
  return {
    type: "GET_COUNTRY",
    payload: {
      country,
    },
  };
}
export function searchCountries(name: string): AllActions {
  return {
    type: "SEARCH_COUNTRY",
    payload: name,
  };
}

export function fetchCountries() {
  return (dispatch: Dispatch) => {
    dispatch(loading());

    return fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getCountries(data));
      });
  };
}

export function fetchCountry(name: string) {
  return (dispatch: Dispatch) => {
    dispatch(loadingSingleCountry());
    fetch("https://restcountries.com/v3.1/name/" + name)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getCountry(data));
      });
  };
}
