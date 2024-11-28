import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';


const GenreList = () => {

    const { data, error, isLoading } = useGenres();

    const genreId = useGameQueryStore(s => s.gameQuery.genreId);
    const setSelectedGenre = useGameQueryStore(s => s.setGenreId);

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>
    return (
        <>
            <Heading fontSize='xl' > Genres</Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === genreId ? 'bold' : 'normal'} fontSize='md' variant={'ghost'} onClick={() => setSelectedGenre(genre.id)}>
                            <HStack>
                                <Image objectFit='cover' borderRadius={5} boxSize='32px'
                                    src={getCroppedImageUrl(genre.image_background)}></Image>
                                <Text>
                                    {genre.name}
                                </Text>
                            </HStack>
                        </Button>
                    </ListItem>
                ))
                }
            </List >
        </>
    )
}

export default GenreList