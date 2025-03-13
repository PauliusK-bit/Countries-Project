import { Link } from "react-router";
import { ContinentProps } from "./Types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 120px;
  height: auto;
  border-radius: 10px;
`;

const ContinentItem = ({ data }: ContinentProps) => {
  const { name, countriesCount, areaKm2, population, image, continentId } =
    data;

  return (
    <>
      <Container className="bg-accent-content">
        <TextContainer>
          <Title>Continent: {name}</Title>
          <StyledLink to={`/continent/${continentId}`}>
            Countries: {countriesCount} ⬅️ See all continent countries
          </StyledLink>
          <p className="text-primary">Size: {areaKm2} km²</p>
          <h5 className="text-base-100">Population: {population}</h5>
        </TextContainer>
        <Image src={image} alt={`${name} continent`} />
      </Container>
    </>
  );
};

export default ContinentItem;
