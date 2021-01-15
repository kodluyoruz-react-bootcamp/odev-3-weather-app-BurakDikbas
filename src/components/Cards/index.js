import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "5px",
    width: "150px",
    "&:hover": {
      boxShadow:
        "0 30px 30px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.23)",
      cursor: "pointer",
      opacity: "1",
    },
    backgroundColor: "#ff0000",
    color: "#ffcc00",
    opacity: "0.8",
  },
  media: {
    margin: "0 auto",
    width: 60,
    height: 60,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    position: "relative",
    zIndex: 1000,
    backgroundColor: "black",
  },
  header: {
    color: "#ffcc00",
    backgroundColor: "black",

  },
  typographyFont: {
    color: "#ffcc00",
    fontSize: "16px",
    borderRadius: "5px",
    marginTop: "5px",
    padding: "5px",
    backgroundColor: "black",
  },
  typographyText: {
    fontSize: "20px",
  },
  today: {
    border: "1px solid rgba(0, 0, 0, 0.19) ",
    boxShadow:
      "0 30px 30px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.23)",
    opacity: "1",
  },
}));

function Cards({ days }) {
  const classes = useStyles();
  var weekDays = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const date = new Date(days.valid_date);
  const today = weekDays[date.getDay()];
  const monthDay = new Date().getDate();
  const monthToday = new Date(days.valid_date).getDate();

  return (
    <Card
      className={`${classes.root} ${
        monthDay === monthToday ? classes.today : null
      }`}
    >
      <CardHeader className={classes.header} title={`${days.temp}°`} />
      <CardMedia
        className={classes.media}
        image={`https://www.weatherbit.io/static/img/icons/${days.weather.icon}.png`}
        title="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body2"
          component="div"
          className={classes.typographyText}
        >
          {today}
        </Typography>
        <Typography
          className={classes.typographyFont}
          variant="body2"
          component="div"
        >
          min:{days.min_temp}°
        </Typography>
        <Typography
          className={classes.typographyFont}
          variant="body2"
          component="div"
        >
          max:{days.max_temp}°
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Cards;
