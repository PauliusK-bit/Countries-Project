import { BrowserRouter, Route, Routes } from "react-router";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import ContinentsPage from "./pages/ContinentsPage/ContinentsPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="countries" element={<CountriesPage />} />
          <Route path="continents" element={<ContinentsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
