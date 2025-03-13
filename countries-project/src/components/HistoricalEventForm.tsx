import { useState } from "react";
import { useHistoricalEvents } from "../pages/HistoricalEventsPage/HistoricalEventsPageContextProvider";
import { HistoricalEvent } from "./Types";

const HistoricalEventForm: React.FC = () => {
  const { addEvent } = useHistoricalEvents();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState<number | undefined>(undefined);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent: HistoricalEvent = {
      title,
      year: year ?? 0,
      description,
    };

    addEvent(newEvent);

    setTitle("");
    setYear(undefined);
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", border: "1px solid #ddd" }}
    >
      <div className="form-control" style={{ marginBottom: "10px" }}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div className="form-control" style={{ marginBottom: "10px" }}>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div className="form-control" style={{ marginBottom: "10px" }}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", height: "100px" }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add Event
      </button>
    </form>
  );
};

export default HistoricalEventForm;
