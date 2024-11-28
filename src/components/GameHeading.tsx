import { Heading } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'
import findById from '../services/find'
import useGameQueryStore from '../store'

const GameHeading = () => {

    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const { data: genres } = useGenres();
    const genre = findById(genres?.results, genreId);

    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    const { data: platforms } = usePlatforms();
    const platform = findById(platforms?.results, platformId);


    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
        <Heading as='h1'
            marginY={5} fontSize='5xl'>
            {heading}
        </Heading>
    )
}

export default GameHeading