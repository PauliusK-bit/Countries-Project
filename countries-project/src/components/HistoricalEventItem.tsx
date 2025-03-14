/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useNavigate } from "react-router";
import { useHistoricalEvents } from "../pages/HistoricalEventsPage/HistoricalEventsPageContextProvider";
import { HistoricalEvent } from "./Types";

interface HistoricalEventItemProps extends HistoricalEvent {}
const HistoricalEventItem: React.FC<HistoricalEventItemProps> = ({
  id,
  title,
  description,
}) => {
  const { deleteEvent } = useHistoricalEvents();

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/editEvent/${id}`);
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
        <strong>Event title:</strong> {title}
      </p>

      <p>{description}</p>
      <button
        onClick={() => deleteEvent(id)}
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
