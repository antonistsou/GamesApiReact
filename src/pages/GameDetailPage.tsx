import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading, HStack, Img, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GameDetailPage = () => {

    const { slug } = useParams();
    const { data, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner></Spinner>;

    if (error || !data) throw error;

    return (
        <>
            <Heading textAlign={'center'}>{data.name}</Heading>
            <HStack>
                <Img src={getCroppedImageUrl(data.background_image)}></Img>
                <Text>{data.description_raw}</Text>
            </HStack>
        </>
    )
}

export default GameDetailPage