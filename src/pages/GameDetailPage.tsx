import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameScreenShots from "../components/GameScreenShots";
import GameTrailer from "../components/GameTrailer";
import ExpandableBtn from "../components/ExpandableBtn";

const GameDetailPage = () => {

    const { slug } = useParams();
    const { data, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner></Spinner>;

    if (error || !data) throw error;

    return (
        <>
            <Heading textAlign={'center'}>{data.name}</Heading><hr></hr>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                <GridItem>
                    <GameAttributes data={data}></GameAttributes>
                    <ExpandableBtn>{data.description_raw}</ExpandableBtn>
                </GridItem>
                <GridItem>
                    <GameTrailer gameId={data.id}></GameTrailer>
                    <GameScreenShots gameId={data.id}></GameScreenShots>
                </GridItem>
            </ SimpleGrid>
        </>
    )
}

export default GameDetailPage