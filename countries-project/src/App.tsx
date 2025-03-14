import { BrowserRouter, Route, Routes } from "react-router";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import ContinentsPage from "./pages/ContinentsPage/ContinentsPage";
import Navigation from "./components/NavigationBar/NavigationBar";
import HistoricalEventsPage from "./pages/HistoricalEventsPage/HistoricalEventsPage";
import ContinentCountries from "./pages/ContinentCountries/ContinentCountries";
import BestRatedCountriesPage from "./pages/BestRatedCountriesPage/BestRatedCountriesPage";
import TouristAttractionsPage from "./pages/TouristAttractionsPage/TouristAttractionsPage";
import CreatedHistoricalEventsPage from "./pages/CreatedHistoricalEventsPage/CreatedHistoricalEventsPage";
import CreatedCountriesPage from "./pages/CreatedCountriesPage/CreatedCountriesPage";
import { ToastContainer } from "react-toastify";
import SportsPage from "./pages/SportsPage/SportsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <ToastContainer />
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
          <Route
            path="touristAttractions/:countryId"
            element={<TouristAttractionsPage />}
          />
          <Route
            path="historicalEvents/:eventId"
            element={<HistoricalEventsPage />}
          />
          <Route
            path="createdHistoricalEvents"
            element={<CreatedHistoricalEventsPage />}
          />
          <Route path="createdCountries" element={<CreatedCountriesPage />} />
          <Route path="sports/:sportId" element={<SportsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
