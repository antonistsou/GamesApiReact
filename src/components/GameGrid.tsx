import { Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames"
import Cards from "./Cards";
import GameSkeleton from "./GameSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

//Fetch Data from Rawg.io
const GameGrid = () => {

    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const fetchGamesCount = data?.pages
        .reduce((acc, page) => acc + page.results.length, 0) || 0;

    if (error) return <p>{error.message}</p>

    return (<>
        <InfiniteScroll
            dataLength={fetchGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner></Spinner>}>

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
                spacing={5}
                padding={15}>
                {isLoading && skeletons.map(skeleton =>
                    <GameSkeleton key={skeleton}></GameSkeleton>
                )}
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page.results.map((game) =>
                            <Cards key={game.id} game={game}></Cards>)
                        }
                    </React.Fragment>)}
            </SimpleGrid>
            {
                <Button opacity='0%' marginBottom={5} onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>}
        </InfiniteScroll>
    </>
    )
}
export default GameGrid