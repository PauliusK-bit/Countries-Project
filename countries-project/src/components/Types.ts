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
  continentId: number;
}

export interface ContinentProps {
  data: Continent;
}

export interface HistoricalEvent {
  id: string;
  title: string;
  description: string;
  year: number;
}

export interface BestRatedCountry {
  id: string;
  name: string;
  capital: string;
  population: number;
  language: string;
  touristRating: number;
  description: string;
  flag: string;
}
