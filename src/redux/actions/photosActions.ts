import { GET_PHOTOS } from "./actionConsts";
import { AllActions } from "../../types";
import { Photo } from "../../types";
import { loadingSingleCountry } from "./loadingActions";
import { Dispatch } from "redux";
export function getPhotos(photo: Photo[]): AllActions {
  return {
    type: GET_PHOTOS,
    payload: {
      photo,
    },
  };
}

export function fetchPhoto(name: string) {
  console.log(name);
  return (dispatch: Dispatch) => {
    dispatch(loadingSingleCountry());

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
