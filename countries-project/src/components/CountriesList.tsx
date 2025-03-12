import { useEffect, useState } from "react";
import { Country } from "./Types";
import { fetchAllCountries } from "../api/Countries";
import CountryItem from "./CountryItem";
import { Box } from "@mui/material";

const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllCountries()
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Kraunama...</p>;
  if (error) return <p>Klaida: {error}</p>;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}
    >
      {countries.map((country, index) => (
        <CountryItem key={index} data={country} />
      ))}
    </Box>
  );
};

export default CountriesList;
