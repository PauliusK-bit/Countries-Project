import HistoricalEventsList from "../../components/HistoricalEventsList";
import { HistoricalEventsPageContextProvider } from "./HistoricalEventsPageContextProvider";

const HistoricalEventsPage = () => {
  return (
    <HistoricalEventsPageContextProvider>
      <div>Historical events</div>
      <HistoricalEventsList />
      {/* <HistoricalEventForm /> */}
    </HistoricalEventsPageContextProvider>
  );
};

export default HistoricalEventsPage;
