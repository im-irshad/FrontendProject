import { AllActions, Photo } from "../../types";
import { Country } from "../../types";

type InitialState = {
  countries: Country[];
  country: Country[];
  filterCountry: Country[];
  loading: Boolean;
  loading1: Boolean;
  favouriteCountry: Country[];
  mode: Boolean;
  sorted: Country[];
  sortedR: Country[];
  areaByAsc: Country[];
  areaByDsc: Country[];
  langEng: Country[];
  popByAsc: Country[];
  popByDsc: Country[];
  regEurope: Country[];
  photo: Photo[];
};

const initialState: InitialState = {
  countries: [],
  country: [],
  filterCountry: [],
  loading: true,
  loading1: true,
  favouriteCountry: [],
  mode: false,
  sorted: [],
  sortedR: [],
  areaByAsc: [],
  areaByDsc: [],
  langEng: [],
  popByAsc: [],
  popByDsc: [],
  regEurope: [],
  photo: [],
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
    case "GET_PHOTOS": {
      return {
        ...state,
        loading: false,
        photo: CountryActions.payload.photo,
      };
    }

    case "SORTING_A_TO_Z": {
      return {
        ...state,
        loading: false,
        sorted: CountryActions.payload.countries.sort((a, b) => {
          var nameA = a.name.common.toUpperCase();
          var nameB = b.name.common.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      };
    }
    case "SORTING_Z_TO_A": {
      return {
        ...state,
        loading: false,
        sortedR: CountryActions.payload.countries.sort((a, b) => {
          var nameA = a.name.common.toUpperCase();
          var nameB = b.name.common.toUpperCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }),
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
    case "ADD_FAVOURITE": {
      return {
        ...state,
        favouriteCountry: [
          ...state.favouriteCountry,
          CountryActions.payload.addCountry,
        ],
      };
    }

    case "REMOVE_FAVOURITE": {
      return {
        ...state,
        favouriteCountry: [
          ...state.favouriteCountry.filter((c) => {
            return c !== CountryActions.payload.rmvCountry;
          }),
        ],
      };
    }

    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "DARK_MODE": {
      return {
        ...state,
        mode: !state.mode,
      };
    }

    case "REGION_EURO": {
      return {
        ...state,
        loading: false,
        regEurope: CountryActions.payload.countries.sort((a, b) => {
          var nameA = a.region.toUpperCase();
          var nameB = b.region.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      };
    }

    case "POP_DSC": {
      return {
        ...state,
        popByDsc: CountryActions.payload.countries.sort((a, b) => {
          return a.population - b.population;
        }),
      };
    }

    case "POP_ASC": {
      return {
        ...state,
        popByAsc: CountryActions.payload.countries.sort((a, b) => {
          return b.population - a.population;
        }),
      };
    }

    case "LANG_ENG": {
      return {
        ...state,
        favouriteCountry: [...state.favouriteCountry],
      };
    }

    case "AREA_ASC": {
      return {
        ...state,
        areaByAsc: CountryActions.payload.countries.sort((a, b) => {
          return a.area - b.area;
        }),
      };
    }

    case "AREA_DSC": {
      return {
        ...state,
        areaByDsc: CountryActions.payload.countries.sort((a, b) => {
          return b.area - a.area;
        }),
      };
    }
    default:
      return state;
  }
}
