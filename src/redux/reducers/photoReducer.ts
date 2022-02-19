import { AllActions, Photo } from "../../types";
import { Country } from "../../types";

type InitialState = {
  loading: Boolean;
  photo: Photo[];
};

const initialState: InitialState = {
  loading: true,
  photo: [],
};
export default function countryReducer(
  state = initialState,
  photosActions: AllActions
): InitialState {
  switch (photosActions.type) {
    case "GET_PHOTOS": {
      return {
        ...state,
        loading: false,
        photo: photosActions.payload.photo,
      };
    }

    default:
      return state;
  }
}
