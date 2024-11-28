import { Game } from '../entities/Game'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIcon from './PlatformIcon'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import { Link } from 'react-router-dom'

interface Props {
    game: Game
}

const Cards = ({ game }: Props) => {
    return (
        <Card overflow='hidden' width='100%'
            _hover={{
                transform: 'scale(1.05)',
                transition: 'transform .10s ease-in'
            }}>
            <Link to={'/' + game.slug}>
                <Image src={getCroppedImageUrl(game.background_image)}></Image>
                <CardBody>
                    <HStack justifyContent='space-between' marginBottom={3}>
                        <PlatformIcon platforms={game.parent_platforms.map(
                            p => p.platform
                        )}>
                        </PlatformIcon>
                        <CriticScore score={game.metacritic}>
                        </CriticScore>
                    </HStack>
                    <Heading fontSize='2xl'>
                        {game.name}
                    </Heading>
                </CardBody>
            </Link>

        </Card >
    )
}

export default Cards