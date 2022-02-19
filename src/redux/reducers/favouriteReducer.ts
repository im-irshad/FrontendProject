import { AllActions, Photo } from "../../types";
import { Country } from "../../types";

type InitialState = {
  favouriteCountry: Country[];
};

const initialState: InitialState = {
  favouriteCountry: [],
};
export default function countryReducer(
  state = initialState,
  favouriteActions: AllActions
): InitialState {
  switch (favouriteActions.type) {
    case "ADD_FAVOURITE": {
      return {
        ...state,
        favouriteCountry: [
          ...state.favouriteCountry,
          favouriteActions.payload.addCountry,
        ],
      };
    }

    case "REMOVE_FAVOURITE": {
      return {
        ...state,
        favouriteCountry: [
          ...state.favouriteCountry.filter((c) => {
            return c !== favouriteActions.payload.rmvCountry;
          }),
        ],
      };
    }

    default:
      return state;
  }
}
