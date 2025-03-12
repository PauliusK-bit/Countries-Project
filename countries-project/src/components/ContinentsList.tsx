import { useEffect, useState } from "react";
import { fetchAllContinents } from "../api/Continents";
import ContinentItem from "./ContinentItem";
import { Continent } from "./Types";

const ContinentsList = () => {
  const [continents, setContinents] = useState<Continent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllContinents()
      .then((data) => {
        setContinents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Kraunama...</p>;
  if (error) return <p>Klaida: {error}</p>;

  return (
    <div className="continent">
      {continents.map((continent, index) => (
        <ContinentItem key={index} data={continent} />
      ))}
    </div>
  );
};

export default ContinentsList;
