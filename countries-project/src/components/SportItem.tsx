import { SportProps } from "./Types";

const SportItem = ({ data }: SportProps) => {
  const { country, nationalSport, famousAthletes, majorTournaments } = data;

  return (
    <>
      <div>
        <h1>Sports page</h1>
        <h2>{country}</h2>
        <p>{nationalSport}</p>
        <p>{famousAthletes}</p>
        <p>{majorTournaments}</p>
      </div>
    </>
  );
};

export default SportItem;
