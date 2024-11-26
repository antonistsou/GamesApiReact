import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { Text } from '@chakra-ui/react';

interface Props {
    onSelect: (genre: Genre) => void;
    selectedGenre?: number;
}

const GenreList = ({ selectedGenre, onSelect }: Props) => {

    const { data, error, isLoading } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>
    return (
        <>
            <Heading fontSize='xl' > Genres</Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre ? 'bold' : 'normal'} fontSize='md' variant={'ghost'} onClick={() => onSelect(genre)}>
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