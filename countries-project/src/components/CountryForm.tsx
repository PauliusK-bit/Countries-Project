/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { CreatedCountry } from "./Types";
import axios from "axios";
import { API_URL } from "../api/config";
import { toast } from "react-toastify";

const CountryForm: React.FC = () => {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !capital || !flag) {
      toast.error("All fields are required");
      return;
    }

    const newCountry: CreatedCountry = {
      name,
      capital,
      flag,
    };

    try {
      const { data } = await axios.post(
        `${API_URL}/createdCountries`,
        newCountry
      );
      setName("");
      setCapital("");
      setFlag("");
    } catch {
      console.error("Countrie was not created");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Country name:</label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="capital">Capital:</label>
        <input
          className="input"
          type="text"
          id="capital"
          name="capital"
          value={capital}
          onChange={(event) => setCapital(event.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="flag">Flag:</label>
        <input
          className="input"
          type="url"
          id="flag"
          name="flag"
          value={flag}
          onChange={(event) => setFlag(event.target.value)}
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
        Add Country
      </button>
    </form>
  );
};

export default CountryForm;
