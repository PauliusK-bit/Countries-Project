import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CountryProps } from "./Types";

const CountryItem = ({ data }: CountryProps) => {
  const { name, flag, capital } = data;

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={flag}
            alt={`${name} flag`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {capital}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CountryItem;
