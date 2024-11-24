import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import Cards from "./Cards";
import GameSkeleton from "./GameSkeleton";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

//Fetch Data from Rawg.io
const GameGrid = ({ gameQuery }: Props) => {

    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    if (error) return <p>{error}</p>

    return (<>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
            spacing={5}
            padding={15}>
            {isLoading && skeletons.map(skeleton =>
                <GameSkeleton key={skeleton}></GameSkeleton>
            )}
            {data.map(g =>
                <Cards key={g.id} game={g}></Cards>)
            }
        </SimpleGrid>
    </>
    )
}
export default GameGrid