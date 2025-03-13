import axios from "axios";
import { API_URL } from "../api/config";

export const fetchAllCountries = async () => {
  try {
    const { data } = await axios(`${API_URL}/AllWorldCountries`);
    return data;
  } catch {
    console.log(Error);

    throw new Error("Something went wrong");
  }
};
