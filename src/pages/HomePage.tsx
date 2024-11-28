import { Grid, Box, GridItem, HStack } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelecter from '../components/PlatformSelecter'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`
        }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >
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

export default HomePage