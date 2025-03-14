import axios from "axios";
import { useState } from "react";
import { API_URL } from "../api/config";
import { CreatedHistoricalEvent } from "./Types";

const HistoricalEventForm: React.FC = ({}) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState<number>();
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !year || !description) {
      setError("All fields are required.");
      return;
    }

    const newEvent: CreatedHistoricalEvent = {
      title,
      year,
      description,
    };

    try {
      const { data } = await axios.post(
        `${API_URL}/createdHistoricalEvents`,
        newEvent
      );

      setTitle("");
      setYear(undefined);
      setDescription("");
      setError(null);
    } catch {
      setError("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", border: "1px solid #ddd" }}
    >
      <div className="form-control" style={{ marginBottom: "10px" }}>
        <label htmlFor="title">Title:</label>
        <input
          className="bg-base-300"
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
          className="bg-base-300"
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
          className="bg-base-300"
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
