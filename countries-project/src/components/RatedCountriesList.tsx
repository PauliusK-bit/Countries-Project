import React, { useEffect } from "react";
import { useBestRatedCountries } from "../pages/BestRatedCountriesPage/BestRatedCountriesPageContextProvider";
import { BestRatedCountry } from "./Types";
import RatedCountryItem from "./RatedCountryItem";

const RatedCountriesList: React.FC = () => {
  const { bestRatedCountries, fetchCountries, loading, error } =
    useBestRatedCountries();

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountries();
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {bestRatedCountries.map((country: BestRatedCountry) => (
          <RatedCountryItem key={country.id} {...country} />
        ))}
      </ul>
    </div>
  );
};

export default RatedCountriesList;
