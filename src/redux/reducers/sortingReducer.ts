import { AllActions, Photo } from "../../types";
import { Country } from "../../types";

type InitialState = {
  countries: Country[];
  loading: Boolean;
  loading1: Boolean;
  sorted: Country[];
  sortedR: Country[];
  areaByAsc: Country[];
  areaByDsc: Country[];
  popByAsc: Country[];
  popByDsc: Country[];
  regEurope: Country[];
};

const initialState: InitialState = {
  countries: [],
  loading: true,
  loading1: true,
  sorted: [],
  sortedR: [],
  areaByAsc: [],
  areaByDsc: [],
  popByAsc: [],
  popByDsc: [],
  regEurope: [],
};
export default function sortingReducer(
  state = initialState,
  sortingActions: AllActions
): InitialState {
  switch (sortingActions.type) {
    case "SORTING_A_TO_Z": {
      return {
        ...state,
        loading: false,
        sorted: sortingActions.payload.countries.sort((a, b) => {
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
        sortedR: sortingActions.payload.countries.sort((a, b) => {
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

    case "REGION_EURO": {
      return {
        ...state,
        loading: false,
        regEurope: sortingActions.payload.countries.sort((a, b) => {
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
        popByDsc: sortingActions.payload.countries.sort((a, b) => {
          return a.population - b.population;
        }),
      };
    }

    case "POP_ASC": {
      return {
        ...state,
        popByAsc: sortingActions.payload.countries.sort((a, b) => {
          return b.population - a.population;
        }),
      };
    }

    case "AREA_ASC": {
      return {
        ...state,
        areaByAsc: sortingActions.payload.countries.sort((a, b) => {
          return a.area - b.area;
        }),
      };
    }

    case "AREA_DSC": {
      return {
        ...state,
        areaByDsc: sortingActions.payload.countries.sort((a, b) => {
          return b.area - a.area;
        }),
      };
    }
    default:
      return state;
  }
}
