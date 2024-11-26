import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import findById from '../services/find';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: number | undefined;
}

const PlatformSelecter = ({ onSelectPlatform, selectedPlatform }: Props) => {

    const { data, error } = usePlatforms();
    // const selectedPlat = data?.results.find(p => p.id === selectedPlatform)
    const selectedPlat = findById(data?.results, selectedPlatform);
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}> {selectedPlat?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map(platfrom => <MenuItem
                    onClick={() => onSelectPlatform(platfrom)}
                    key={platfrom.id}>{platfrom.name}</MenuItem>)}
            </MenuList>
        </Menu >
    )
}

export default PlatformSelecter