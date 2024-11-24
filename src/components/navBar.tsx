import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/rb_492.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearcInput from './SearcInput'

interface Props {
    onSearch: (searchText: string) => void;
}


const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack paddingLeft='25px' paddingTop='25px' >
            <Image borderRadius={7} src={logo} boxSize="60px" paddingBottom={'15px'}></Image>
            <SearcInput onSearch={onSearch}></SearcInput>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar