import React from "react";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import Cards from "../Cards";
import { Grid } from "@material-ui/core";
function DisplayMenu() {
  const { data } = useContext(DataContext);
  //console.log(data);
  return (
    <>
      <Grid container xs={12} justify="center" item>
        {data.map((days) => (
          <Grid key={Math.random() * 1000} item>
            <Cards days={days}></Cards>
          </Grid>
        ))}
      </Grid>
      <Grid container xs={6} justify="center" item>
        <Grid xs={12} item></Grid>
        <Grid xs={12} item></Grid>
        <Grid xs={12} item></Grid>
      </Grid>
    </>
  );
}

export default DisplayMenu;
