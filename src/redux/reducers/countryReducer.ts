import { AllActions, Photo } from "../../types";
import { Country } from "../../types";

type InitialState = {
  countries: Country[];
  country: Country[];
  filterCountry: Country[];
  loading: Boolean;
  loading1: Boolean;
};

const initialState: InitialState = {
  countries: [],
  country: [],
  filterCountry: [],
  loading: true,
  loading1: true,
};
export default function countryReducer(
  state = initialState,
  CountryActions: AllActions
): InitialState {
  switch (CountryActions.type) {
    case "GET_COUNTRIES": {
      return {
        ...state,
        loading: false,
        countries: CountryActions.payload.countries,
        filterCountry: CountryActions.payload.countries,
      };
    }

    case "GET_COUNTRY": {
      return {
        ...state,
        loading1: false,
        country: CountryActions.payload.country,
      };
    }
    case "SEARCH_COUNTRY": {
      return {
        ...state,
        filterCountry: state.countries.filter((country) => {
          return (
            country.name.common
              .toLowerCase()
              .search(CountryActions.payload.toLocaleLowerCase()) !== -1
          );
        }),
      };
    }

    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
}
