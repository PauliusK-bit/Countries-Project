import axios from "axios";
import { API_URL } from "./config";

export const fetchAllContinents = async () => {
  try {
    const { data } = await axios(`${API_URL}/continents`);
    return data;
  } catch {
    console.log(Error);

    throw new Error("Something went wrong");
  }
};
