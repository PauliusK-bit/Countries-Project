/* eslint-disable @typescript-eslint/no-empty-object-type */
import styled from "styled-components";
import { BestRatedCountry } from "./Types";

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
  font-size: 14px;
  color: #666;
`;

const RatedCountryItem: React.FC<BestRatedCountryItemProps> = ({
  name,
  capital,
  population,
  language,
  touristRating,
  description,
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
      <CountryDetails>Rating: {touristRating}/10⭐ </CountryDetails>
      <CountryDetails>Description: {description}</CountryDetails>
    </CountryContainer>
  );
};

export default RatedCountryItem;
