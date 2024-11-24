import { Grid, GridItem, HStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";
import NavBar from "./components/navBar"
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelecter from "./components/PlatformSelecter";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platforms: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar onSearch={(searchText) =>
          setGameQuery({ ...gameQuery, searchText })
        }></NavBar>
      </GridItem>
      <Box display={{ base: "none", lg: "block" }} >
        <GridItem area='aside' padding='30px' paddingX='1px'>
          <GenreList selectedGenre={gameQuery.genre} onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}></GenreList>
        </GridItem>
      </Box>
      <GridItem area='main'>
        <Box paddingLeft={4}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack spacing={5} >
            <PlatformSelecter
              selectedPlatform={gameQuery.platforms}
              onSelectPlatform={
                (platforms) => setGameQuery({ ...gameQuery, platforms })
              }></PlatformSelecter>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery(
              { ...gameQuery, sortOrder }
            )}></SortSelector>
          </HStack >
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid >
  )
}

export default App
