import { Platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { SiNintendo } from 'react-icons/si'
import {
    FaWindows, FaPlaystation, FaXbox
    , FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa'
import { IconType } from 'react-icons'

interface Props {
    platforms: Platform[]
}

const PlatformIcon = ({ platforms }: Props) => {

    //index signature
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        Xbox: FaXbox,
        apple: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nitendo: SiNintendo,
        web: BsGlobe,

    }

    return (
        <HStack marginY='7px'>
            {
                platforms.map((platform) =>
                    <Icon key={platform.id} as={iconMap[platform.slug]}
                        color='gray.500'>
                    </Icon>
                )
            }
        </HStack>
    );
}

export default PlatformIcon