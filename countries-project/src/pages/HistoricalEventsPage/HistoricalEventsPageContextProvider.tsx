/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useContext, useReducer } from "react";
import { HistoricalEvent } from "../../components/Types";
import {
  EventActionTypes,
  HistoricalEventInitialState,
  historicalEventReducer,
} from "./eventsReducer";
import axios from "axios";
import { API_URL } from "../../api/config";

interface HistoricalEventsContextType {
  historicalEvents: HistoricalEvent[];
  loading: boolean;
  error: string;
  fetchEvents: () => Promise<void>;
  addEvent: (event: HistoricalEvent) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;
  editEvent: (event: HistoricalEvent) => Promise<void>;
}

export const HistoricalEventsContext = createContext<
  HistoricalEventsContextType | undefined
>(undefined);

export const HistoricalEventsPageContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(
    historicalEventReducer,
    HistoricalEventInitialState
  );

  const { historicalEvents, loading, error } = state;

  const fetchEvents = async () => {
    try {
      dispatch({ type: EventActionTypes.FETCH });
      const { data } = await axios("http://localhost:3000/historicalEvents");

      dispatch({ type: EventActionTypes.SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: EventActionTypes.FAIL,
        payload: "Failed to fetch events",
      });
    }
  };

  const addEvent = async (newEvent: HistoricalEvent) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/historicalEvents`,
        newEvent
      );
      dispatch({ type: EventActionTypes.ADD_EVENT, payload: data });
    } catch (error) {
      dispatch({ type: EventActionTypes.FAIL, payload: "Failed to add event" });
    }
  };

  const deleteEvent = async (id: string) => {
    console.log("Deleting event id:", id);

    try {
      await axios.delete(`${API_URL}/historicalEvents/${id}`);
      dispatch({ type: EventActionTypes.DELETE, payload: id });
    } catch (err) {
      dispatch({
        type: EventActionTypes.FAIL,
        payload: "Failed to delete event",
      });
    }
  };

  const editEvent = async (event: HistoricalEvent) => {
    try {
      const { data } = await axios.put(
        `${API_URL}/historicalEvents/${event.id}`,
        event
      );
      dispatch({ type: EventActionTypes.EDIT_EVENT, payload: data });
    } catch (err) {
      dispatch({
        type: EventActionTypes.FAIL,
        payload: "Failed to edit event",
      });
    }
  };

  const ctxValue: HistoricalEventsContextType = {
    historicalEvents,
    loading,
    error,
    fetchEvents,
    addEvent,
    deleteEvent,
    editEvent,
  };

  return (
    <HistoricalEventsContext.Provider value={ctxValue}>
      {children}
    </HistoricalEventsContext.Provider>
  );
};

export const useHistoricalEvents = () => {
  const ctx = useContext(HistoricalEventsContext);
  if (!ctx) {
    throw new Error(
      "useHistoricalEvents cannot be used outside the HistoricalEventsPageContextProvider"
    );
  }

  return ctx;
};
