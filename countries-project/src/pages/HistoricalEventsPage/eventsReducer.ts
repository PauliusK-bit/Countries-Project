import { HistoricalEvent } from "../../components/Types";

interface HEventState {
  historicalEvents: HistoricalEvent[];
  error: string;
  loading: boolean;
}

export enum EventActionTypes {
  FETCH = "fetch",
  SUCCESS = "success",
  FAIL = "fail",
  DELETE = "delete",
  ADD_EVENT = "addEvent",
  EDIT_EVENT = "editEvent",
}

export type HistoricalEventAction =
  | { type: EventActionTypes.FETCH }
  | { type: EventActionTypes.SUCCESS; payload: HistoricalEvent[] }
  | { type: EventActionTypes.FAIL; payload: string }
  | { type: EventActionTypes.DELETE; payload: string }
  | { type: EventActionTypes.ADD_EVENT; payload: HistoricalEvent }
  | { type: EventActionTypes.EDIT_EVENT; payload: HistoricalEvent };

export const HistoricalEventInitialState: HEventState = {
  historicalEvents: [],
  error: "",
  loading: false,
};

export const historicalEventReducer = (
  state: HEventState,
  action: HistoricalEventAction
): HEventState => {
  switch (action.type) {
    case EventActionTypes.FETCH:
      return { ...state, loading: true, error: "" };

    case EventActionTypes.SUCCESS:
      return { ...state, loading: false, historicalEvents: action.payload };

    case EventActionTypes.FAIL:
      return { ...state, loading: false, error: action.payload };

    case EventActionTypes.DELETE:
      return {
        ...state,
        historicalEvents: state.historicalEvents.filter(
          (event) => event.id !== action.payload.toString()
        ),
      };

    case EventActionTypes.ADD_EVENT:
      return {
        ...state,
        historicalEvents: [...state.historicalEvents, action.payload],
      };

    case EventActionTypes.EDIT_EVENT:
      return {
        ...state,
        historicalEvents: state.historicalEvents.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };

    default:
      return state;
  }
};
