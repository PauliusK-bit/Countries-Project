import { useNavigate } from "react-router";
import { useHistoricalEvents } from "../pages/HistoricalEventsPage/HistoricalEventsPageContextProvider";
import { HistoricalEvent } from "./Types";

interface HistoricalEventItemProps {
  historicalEvent: HistoricalEvent;
}
const HistoricalEventItem: React.FC<HistoricalEventItemProps> = ({
  historicalEvent,
}) => {
  const { deleteEvent } = useHistoricalEvents();

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/editEvent/${historicalEvent.id}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <p>
        <strong>Event title:</strong> {historicalEvent.title}
      </p>

      <p>{historicalEvent.description}</p>
      <button
        onClick={() => deleteEvent(historicalEvent.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
      <button
        onClick={handleEditClick}
        style={{
          background: "blue",
          color: "white",
          border: "none",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default HistoricalEventItem;
