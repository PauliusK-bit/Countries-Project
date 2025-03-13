import { BestRatedCountry } from "../../components/Types";

interface BestRatedCountriesState {
  bestRatedCountries: BestRatedCountry[];
  error: string;
  loading: boolean;
}

export enum RatedCountriesActionTypes {
  FETCH = "fetch",
  SUCCESS = "success",
  FAIL = "fail",
  DELETE = "delete",
  ADD_COUNTRY = "addCountry",
  EDIT_COUNTRY = "editCountry",
}

export type RatedCountriesAction =
  | { type: RatedCountriesActionTypes.FETCH }
  | { type: RatedCountriesActionTypes.SUCCESS; payload: BestRatedCountry[] }
  | { type: RatedCountriesActionTypes.FAIL; payload: string }
  | { type: RatedCountriesActionTypes.DELETE; payload: number }
  | { type: RatedCountriesActionTypes.ADD_COUNTRY; payload: BestRatedCountry }
  | { type: RatedCountriesActionTypes.EDIT_COUNTRY; payload: BestRatedCountry };

export const RatedCountriesInitialState: BestRatedCountriesState = {
  bestRatedCountries: [],
  error: "",
  loading: false,
};

export const RatedCountriesReducer = (
  state: BestRatedCountriesState,
  action: RatedCountriesAction
): BestRatedCountriesState => {
  switch (action.type) {
    case RatedCountriesActionTypes.FETCH:
      return { ...state, loading: true };
    case RatedCountriesActionTypes.SUCCESS:
      return { ...state, loading: false, bestRatedCountries: action.payload };
    case RatedCountriesActionTypes.FAIL:
      return { ...state, loading: false, error: action.payload };
    case RatedCountriesActionTypes.DELETE:
      return {
        ...state,
        bestRatedCountries: state.bestRatedCountries.filter(
          (country) => country.id !== action.payload.toString()
        ),
      };
    case RatedCountriesActionTypes.ADD_COUNTRY:
      return {
        ...state,
        bestRatedCountries: [...state.bestRatedCountries, action.payload],
      };
    case RatedCountriesActionTypes.EDIT_COUNTRY:
      return {
        ...state,
        bestRatedCountries: state.bestRatedCountries.map((country) =>
          country.id === action.payload.id ? action.payload : country
        ),
      };
    default:
      return state;
  }
};
