import { Dispatch } from "redux";
import { Country, Photo } from "../../types";
import { AllActions } from "../../types";

export function darkMode(mode: Boolean): AllActions {
  return {
    type: "DARK_MODE",
    payload: mode,
  };
}
export function sortingAtoZ(countries: Country[]): AllActions {
  return {
    type: "SORTING_A_TO_Z",
    payload: {
      countries,
    },
  };
}

export function sortingZtoA(countries: Country[]): AllActions {
  return {
    type: "SORTING_Z_TO_A",
    payload: {
      countries,
    },
  };
}

export function getCountries(countries: Country[]): AllActions {
  return {
    type: "GET_COUNTRIES",
    payload: {
      countries,
    },
  };
}

export function getPhotos(photo: Photo[]): AllActions {
  return {
    type: "GET_PHOTOS",
    payload: {
      photo,
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
export function loading(): AllActions {
  return {
    type: "LOADING",
  };
}
export function loading1(): AllActions {
  return {
    type: "LOADING",
  };
}

export function addToFavourite(addCountry: Country): AllActions {
  return {
    type: "ADD_FAVOURITE",
    payload: {
      addCountry,
    },
  };
}

export function removeFavourite(rmvCountry: Country): AllActions {
  return {
    type: "REMOVE_FAVOURITE",
    payload: {
      rmvCountry,
    },
  };
}

export function areaAsc(countries: Country[]): AllActions {
  return {
    type: "AREA_ASC",
    payload: {
      countries,
    },
  };
}

export function areaDsc(countries: Country[]): AllActions {
  return {
    type: "AREA_DSC",
    payload: {
      countries,
    },
  };
}

export function langEng(countries: Country[]): AllActions {
  return {
    type: "LANG_ENG",
    payload: {
      countries,
    },
  };
}

export function popAsc(countries: Country[]): AllActions {
  return {
    type: "POP_ASC",
    payload: {
      countries,
    },
  };
}

export function popDsc(countries: Country[]): AllActions {
  return {
    type: "POP_DSC",
    payload: {
      countries,
    },
  };
}

export function regEuro(countries: Country[]): AllActions {
  return {
    type: "REGION_EURO",
    payload: {
      countries,
    },
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
    dispatch(loading1());
    fetch("https://restcountries.com/v3.1/name/" + name)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getCountry(data));
      });
  };
}
export function fetchPhoto(name: string) {
  console.log(name);
  return (dispatch: Dispatch) => {
    dispatch(loading1());

    return fetch(
      "https://api.unsplash.com/search/photos?client_id=" +
        process.env.REACT_APP_API_KEY +
        "&query=" +
        name
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(getPhotos(data.results));
        console.log(data.results);
      });
  };
}
