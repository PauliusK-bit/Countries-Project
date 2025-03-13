import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_URL } from "../../api/config";
import axios from "axios";
import { Country } from "../../components/Types";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const CountryList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CountryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CountryImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CountryName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const ContinentCountries = () => {
  const { continentId } = useParams();
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        if (!continentId) return;
        const { data } = await axios(
          `${API_URL}/AllWorldCountries?continentId=${continentId}`
        );
        setCountries(data);
      } catch (error) {
        console.error("Klaida gaunant šalis:", error);
      }
    };

    fetchCountries();
  }, [continentId]);

  return (
    <Container>
      <h1>Countries of choosen continent</h1>
      {countries.length > 0 ? (
        <CountryList>
          {countries.map((country) => (
            <CountryItem key={country.id}>
              {country.flag ? (
                <CountryImage src={country.flag} alt={country.name} />
              ) : (
                <CountryImage src="Country Flag" alt="" />
              )}
              <CountryName>{country.name}</CountryName>
            </CountryItem>
          ))}
        </CountryList>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ContinentCountries;
