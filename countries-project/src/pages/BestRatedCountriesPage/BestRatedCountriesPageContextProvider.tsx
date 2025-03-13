import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { BestRatedCountry } from "../../components/Types";
import {
  RatedCountriesActionTypes,
  RatedCountriesInitialState,
  RatedCountriesReducer,
} from "./bestRatedCountriesReducer";
import axios from "axios";
import { API_URL } from "../../api/config";

interface BestRatedCountriesContextType {
  bestRatedCountries: BestRatedCountry[];
  loading: boolean;
  error: string;
  fetchCountries: () => Promise<void>;
  addCountry: (country: BestRatedCountry) => Promise<void>;
  deleteCountry: (id: string) => Promise<void>;
  editCountry: (country: BestRatedCountry) => Promise<void>;
}

export const BestRatedCountriesContext = createContext<
  BestRatedCountriesContextType | undefined
>(undefined);

export const BestRatedCountriesPageContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(
    RatedCountriesReducer,
    RatedCountriesInitialState
  );

  const { bestRatedCountries, loading, error } = state;

  const fetchCountries = async () => {
    try {
      dispatch({ type: RatedCountriesActionTypes.FETCH });
      const { data } = await axios(`${API_URL}/bestRatedCountries`);
      dispatch({ type: RatedCountriesActionTypes.SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: RatedCountriesActionTypes.FAIL,
        payload: "Failed to fetch countries",
      });
    }
  };

  const ctxValue: BestRatedCountriesContextType = {
    fetchCountries,
    bestRatedCountries,
    loading,
    error,
  };

  return (
    <BestRatedCountriesContext.Provider value={ctxValue}>
      {children}
    </BestRatedCountriesContext.Provider>
  );
};

export const useBestRatedCountries = () => {
  const ctx = useContext(BestRatedCountriesContext);
  if (!ctx) {
    throw new Error(
      "useHistoricalEvents cannot be used outside the HistoricalEventsPageContextProvider"
    );
  }

  return ctx;
};
