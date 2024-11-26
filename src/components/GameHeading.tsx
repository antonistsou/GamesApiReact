import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'
import findById from '../services/find'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

    const { data: genres } = useGenres();
    const { data: platforms } = usePlatforms();
    const genre = findById(genres?.results, gameQuery.genre);
    const platform = findById(platforms?.results, gameQuery.platforms);

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
        <Heading as='h1'
            marginY={5} fontSize='5xl'>
            {heading}
        </Heading>
    )
}

export default GameHeading