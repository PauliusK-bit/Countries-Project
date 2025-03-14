import { useEffect } from "react";
import { useHistoricalEvents } from "../pages/HistoricalEventsPage/HistoricalEventsPageContextProvider";
import HistoricalEventItem from "./HistoricalEventItem";
import { useParams } from "react-router";

const HistoricalEventsList = () => {
  const { eventId } = useParams();

  const { historicalEvents, error, loading, fetchEvents } =
    useHistoricalEvents();

  useEffect(() => {
    const fetchData = async () => {
      await fetchEvents();
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const filteredEvents = eventId
    ? historicalEvents.filter((event) => event.eventId === eventId)
    : historicalEvents;

  return (
    <div>
      {filteredEvents.length === 0 ? (
        <p>No historical events found.</p>
      ) : (
        <ul>
          {filteredEvents.map((event) => (
            <HistoricalEventItem key={event.id} {...event} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoricalEventsList;
