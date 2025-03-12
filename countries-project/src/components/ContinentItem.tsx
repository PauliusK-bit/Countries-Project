import { ContinentProps } from "./Types";

const ContinentItem = ({ data }: ContinentProps) => {
  const { name, countriesCount, areaKm2, population, image } = data;

  return (
    <>
      <div>
        <h1>Continent name:{name}</h1>
        <h4>Countries {countriesCount}</h4>
        <div>
          <p>Size {areaKm2}</p>
          <h5>Population {population}</h5>
        </div>
        <div>
          <img src={image} alt="continent image" />
        </div>
      </div>
    </>
  );
};

export default ContinentItem;
