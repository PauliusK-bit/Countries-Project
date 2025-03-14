/* eslint-disable @typescript-eslint/no-empty-object-type */
import styled from "styled-components";
import { BestRatedCountry } from "./Types";
import { Link } from "react-router";

interface BestRatedCountryItemProps extends BestRatedCountry {}

const CountryContainer = styled.div`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const CountryName = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: #aa5855;
  span {
    color: #bb7a77;
  }
`;

const CountryDetails = styled.p`
  font-size: 17px;
  color: #72619e;
  span {
    color: #8f80b2;
  }
`;

const RatedCountryItem: React.FC<BestRatedCountryItemProps> = ({
  name,
  capital,
  population,
  language,
  touristRating,
  description,
  countryId,
  eventId,
  sportId,
}) => {
  return (
    <CountryContainer className="bg-success-content">
      <CountryName>
        Country: <span>{name}</span>
      </CountryName>
      <CountryDetails>
        Population: <span>{population}</span>
      </CountryDetails>
      <CountryDetails>
        Capital: <span>{capital}</span>
      </CountryDetails>
      <CountryDetails>
        Languages: <span>{language}</span>
      </CountryDetails>
      <CountryDetails>
        Rating: <span>{touristRating}/10⭐</span>{" "}
      </CountryDetails>
      <CountryDetails>
        Description: <span>{description}</span>{" "}
      </CountryDetails>
      {countryId && (
        <Link
          className="link link-hover"
          to={`/touristAttractions/${countryId}`}
        >
          Tourist Attractions
        </Link>
      )}
      {eventId && (
        <Link
          className="link link-hover"
          style={{ marginLeft: "20px" }}
          to={`/historicalEvents/${eventId}`}
        >
          Historical Events
        </Link>
      )}
      {sportId && (
        <Link
          className="link link-hover"
          style={{ marginLeft: "20px" }}
          to={`/sports/${sportId}`}
        >
          Most Popular sports
        </Link>
      )}
    </CountryContainer>
  );
};

export default RatedCountryItem;
