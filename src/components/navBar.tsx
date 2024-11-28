import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/rb_492.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearcInput from './SearcInput'

const NavBar = () => {
    return (
        <HStack paddingLeft='25px' paddingTop='25px' >
            <Image borderRadius={7} src={logo} boxSize="60px" paddingBottom={'15px'}></Image>
            <SearcInput></SearcInput>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar