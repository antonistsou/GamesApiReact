import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelecter = ({ onSelectPlatform, selectedPlatform }: Props) => {

    const { data, error } = usePlatforms();

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}> {selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data.map(platfrom => <MenuItem
                    onClick={() => onSelectPlatform(platfrom)}
                    key={platfrom.id}>{platfrom.name}</MenuItem>)}
            </MenuList>
        </Menu >
    )
}

export default PlatformSelecter