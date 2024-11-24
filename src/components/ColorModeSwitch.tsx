import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack paddingRight='30px' paddingBottom={'15px'}>
            <Switch
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}></Switch>
            <Text whiteSpace={'nowrap'}>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch