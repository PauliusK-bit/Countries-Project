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
  eventId: string;
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
  countryId: string;
  eventId: string;
  sportId: string;
}

export interface TouristAttraction {
  id: number;
  name: string;
  city: string;
  description: string;
  address: string;
  image: string;
}

export interface CreatedHistoricalEvent {
  title: string;
  description: string;
  year: number;
  id: string;
}

export interface CreatedCountry {
  name: string;
  capital: string;
  flag: string;
  id: string;
}

export interface Sport {
  country: string;
  nationalSport: string;
  famousAthletes: string[];
  majorTournaments: string[];
}

export interface SportProps {
  data: Sport;
}
