import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TouristAttraction } from "../../components/Types";
import axios from "axios";
import { API_URL } from "../../api/config";

const TouristAttractionsPage = () => {
  const { countryId } = useParams();

  const [attractions, setAttractions] = useState<TouristAttraction[]>([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        if (!countryId) return;
        const { data } = await axios(
          `${API_URL}/touristAttractions?countryId=${countryId}`
        );
        setAttractions(data);
      } catch (error) {
        console.error("Klaida gaunant šalis:", error);
      }
    };
    fetchAttractions();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>City</th>
            <th>Description</th>
            <th>Address</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {attractions.map((attraction) => (
            <tr key={attraction.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="font-bold">{attraction.name}</div>
              </td>
              <td>{attraction.city}</td>
              <td>{attraction.description}</td>
              <td>{attraction.address}</td>
              <td>
                <img
                  src={attraction.image}
                  alt={`${attraction.name} Avatar`}
                  className="h-40 w-40 rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TouristAttractionsPage;
