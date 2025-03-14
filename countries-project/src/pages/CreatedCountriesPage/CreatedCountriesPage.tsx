/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import CountryForm from "../../components/CountryForm";
import { CreatedCountry } from "../../components/Types";
import axios from "axios";
import { API_URL } from "../../api/config";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

const CreatedCountriesPage = () => {
  const [createdCountries, setCreatedCountries] = useState<CreatedCountry[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCreatedCountries = async () => {
    try {
      const { data } = await axios(`${API_URL}/createdCountries`);
      setCreatedCountries(data);
    } catch (error) {
      setError("Something went wrong", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteCreatedCountry = async (id: string) => {
    try {
      const { data } = await axios.delete(`${API_URL}/createdCountries/${id}`);
      setCreatedCountries(createdCountries.filter((event) => event.id !== id));
    } catch (error) {
      setError("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchCreatedCountries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Grid2 container spacing={3}>
        {createdCountries.map((country) => (
          <Grid2 item key={country.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={country.flag}
                  alt={`${country.name} flag`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Capital: {country.capital}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deleteCreatedCountry(country.id)}
                    sx={{ mt: 1 }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <CountryForm />
    </>
  );
};
export default CreatedCountriesPage;
