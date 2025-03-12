export interface Country {
  id: string;
  name: string;
  capital: string;
  flag: string;
  population: number;
}

export interface CountryProps {
  data: Country;
}

export interface Continent {
  id: number;
  name: string;
  countriesCount: string;
  areaKm2: number;
  population: number;
  image: string;
}

export interface ContinentProps {
  data: Continent;
}
