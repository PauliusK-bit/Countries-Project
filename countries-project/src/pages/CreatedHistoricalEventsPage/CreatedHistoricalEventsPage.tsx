import { useEffect, useState } from "react";
import { CreatedHistoricalEvent } from "../../components/Types";
import axios from "axios";
import { API_URL } from "../../api/config";
import HistoricalEventForm from "../../components/HistoricalEventForm";

const CreatedHistoricalEventsPage = () => {
  const [createdEvents, setCreatedEvents] = useState<CreatedHistoricalEvent[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCreatedEvents = async () => {
    try {
      const { data } = await axios(`${API_URL}/createdHistoricalEvents`);
      setCreatedEvents(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    try {
      const { data } = await axios.delete(
        `${API_URL}/createdHistoricalEvents/${id}`
      );

      setCreatedEvents(createdEvents.filter((event) => event.id !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    fetchCreatedEvents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Created Historical Events</h2>

      {createdEvents.length === 0 ? (
        <p>No created events found.</p>
      ) : (
        <ul>
          {createdEvents.map((event) => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.year}</p>
              <p>{event.description}</p>
              <button
                className="bg-orange-600"
                onClick={() => handleDeleteEvent(event.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <HistoricalEventForm />
    </div>
  );
};

export default CreatedHistoricalEventsPage;
