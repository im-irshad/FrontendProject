import {
  SORTING_A_TO_Z,
  SORTING_Z_TO_A,
  AREA_ASC,
  AREA_DSC,
  POP_ASC,
  POP_DSC,
  REGION_EURO,
} from "./actionConsts";
import { AllActions } from "../../types";
import { Country } from "../../types";

export function sortingZtoA(countries: Country[]): AllActions {
  return {
    type: SORTING_Z_TO_A,
    payload: {
      countries,
    },
  };
}

export function sortingAtoZ(countries: Country[]): AllActions {
  return {
    type: SORTING_A_TO_Z,
    payload: {
      countries,
    },
  };
}
export function areaAsc(countries: Country[]): AllActions {
  return {
    type: AREA_ASC,
    payload: {
      countries,
    },
  };
}

export function areaDsc(countries: Country[]): AllActions {
  return {
    type: AREA_DSC,
    payload: {
      countries,
    },
  };
}

export function popAsc(countries: Country[]): AllActions {
  return {
    type: POP_ASC,
    payload: {
      countries,
    },
  };
}

export function popDsc(countries: Country[]): AllActions {
  return {
    type: POP_DSC,
    payload: {
      countries,
    },
  };
}

export function regEuro(countries: Country[]): AllActions {
  return {
    type: REGION_EURO,
    payload: {
      countries,
    },
  };
}
