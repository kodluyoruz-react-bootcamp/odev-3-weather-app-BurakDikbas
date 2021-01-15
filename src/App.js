import SelectMenu from "./components/SelectMenu";
import DisplayMenu from "./components/DisplayMenu";
import "./App.css";
import { DataProvider } from "./contexts/DataContext.js";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <Grid container>
          <SelectMenu></SelectMenu>
          <DisplayMenu></DisplayMenu>
        </Grid>
      </DataProvider>
    </div>
  );
}

export default App;
