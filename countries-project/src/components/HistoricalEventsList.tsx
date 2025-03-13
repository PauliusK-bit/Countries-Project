import { useEffect } from "react";
import { useHistoricalEvents } from "../pages/HistoricalEventsPage/HistoricalEventsPageContextProvider";
import HistoricalEventItem from "./HistoricalEventItem";
import { HistoricalEvent } from "./Types";

const HistoricalEventsList = () => {
  const { historicalEvents, error, loading, fetchEvents } =
    useHistoricalEvents();

  useEffect(() => {
    const fetchData = async () => {
      await fetchEvents();
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {historicalEvents.map((event: HistoricalEvent) => (
          <HistoricalEventItem key={event.id} historicalEvent={event} />
        ))}
      </ul>
    </div>
  );
};

export default HistoricalEventsList;
