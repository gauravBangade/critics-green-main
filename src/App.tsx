import { Button, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";



function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        {" "}
        <GridItem area={"nav"}>
          {" "}
          <NavBar/>
        </GridItem>
        <GridItem area={"aside"} >
          {" "}
          Aside{" "}
        </GridItem>
        <GridItem area={"main"} >
         <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
