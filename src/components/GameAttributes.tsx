import { Game } from '../entities/Game'
import { Img, Text, Box, Center, SimpleGrid } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import DefinitionItem from './DefinitionItem'

interface Props {
    data: Game
}

const GameAttributes = ({ data }: Props) => {
    return (
        <>
            <Center>

                <Box width={'700px'} >
                    <Img padding={5} src={getCroppedImageUrl(data.background_image)}></Img>
                    <SimpleGrid columns={2}>
                        <DefinitionItem term='Platforms'>{data.parent_platforms.map(({ platform }) => <Text key={platform.id}> {platform.name}</Text>)}</DefinitionItem>
                        <DefinitionItem term='Metascore'>
                            <CriticScore score={data.metacritic}></CriticScore>
                        </DefinitionItem>
                        <DefinitionItem term="Genres">
                            {data.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
                        </DefinitionItem>
                        <DefinitionItem term="Publishers">
                            {data.publishers.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
                        </DefinitionItem>
                    </SimpleGrid>
                </Box>
            </Center >
        </>
    )
}

export default GameAttributes