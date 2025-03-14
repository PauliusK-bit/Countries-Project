import { Sport } from "./Types";

import SportItem from "./SportItem";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API_URL } from "../api/config";

const SportsList = () => {
  const { sportId } = useParams();
  const [sports, setSports] = useState<Sport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        if (!sportId) return;
        const { data } = await axios(`${API_URL}/sports?sportId=${sportId}`);
        setSports(data);
      } catch (error) {
        console.error("Klaida gaunant šalis:", error);
      }
    };
    fetchSports();
  }, []);

  return (
    <div>
      {sports.map((sport, index) => (
        <SportItem key={index} data={sport} />
      ))}
    </div>
  );
};

export default SportsList;
