import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/navBar";
import PlatformSelecter from "./components/PlatformSelecter";
import SortSelector from "./components/SortSelector";

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <NavBar></NavBar>
      </GridItem>
      <Box display={{ base: "none", lg: "block" }} >
        <GridItem area='aside' padding='30px' paddingX='1px'>
          <GenreList></GenreList>
        </GridItem>
      </Box>
      <GridItem area='main'>
        <Box paddingLeft={4}>
          <GameHeading></GameHeading>
          <HStack spacing={5} >
            <PlatformSelecter></PlatformSelecter>
            <SortSelector></SortSelector>
          </HStack >
        </Box>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid >
  )
}

export default App
