import { BrowserRouter, Route, Routes } from "react-router";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import ContinentsPage from "./pages/ContinentsPage/ContinentsPage";
import Navigation from "./components/Navigation/Navigation";
import HistoricalEventsPage from "./pages/HistoricalEventsPage/HistoricalEventsPage";
import ContinentCountries from "./pages/ContinentCountries/ContinentCountries";
import BestRatedCountriesPage from "./pages/BestRatedCountriesPage/BestRatedCountriesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="allCountries" element={<CountriesPage />} />
          <Route path="continents" element={<ContinentsPage />} />
          <Route path="events" element={<HistoricalEventsPage />} />
          <Route
            path="/continent/:continentId"
            element={<ContinentCountries />}
          />
          <Route
            path="bestRatedCountries"
            element={<BestRatedCountriesPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
