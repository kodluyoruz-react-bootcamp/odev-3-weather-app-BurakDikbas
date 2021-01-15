import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect, useContext } from "react";
import DataContext from "../../contexts/DataContext.js";
import cities from "./cities";
import { getWeather } from "./service";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectMenu() {
  const classes = useStyles();
  const [city, setCity] = useState(cities[56].name);
  const { setData } = useContext(DataContext);
  useEffect(() => {
    getWeather(cities[33].name).then((cityData) => setData(cityData));
  }, [setData]);

  const handleChange = (event) => {
    setCity(event.target.value);
    getWeather(event.target.value).then((cityData) => setData(cityData));
  };
  return (
    <FormControl className={classes.formControl}>
      <Select
        value={city}
        onChange={handleChange}
        className={classes.selectEmpty}
      >
        {cities.map((city) => (
          <MenuItem key={city.id} value={city.name}>
            {city.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectMenu;
