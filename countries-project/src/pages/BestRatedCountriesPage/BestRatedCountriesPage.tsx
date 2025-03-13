import RatedCountriesList from "../../components/RatedCountriesList";
import { BestRatedCountriesPageContextProvider } from "./BestRatedCountriesPageContextProvider";

const BestRatedCountriesPage = () => {
  return (
    <BestRatedCountriesPageContextProvider>
      <RatedCountriesList />
    </BestRatedCountriesPageContextProvider>
  );
};

export default BestRatedCountriesPage;
