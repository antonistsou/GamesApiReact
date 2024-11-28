import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import findById from '../services/find';
import useGameQueryStore from '../store';

const PlatformSelecter = () => {

    const { data, error } = usePlatforms();
    const platformId = useGameQueryStore(s => s.gameQuery.platformId);
    const setSelectedPlatform = useGameQueryStore(s => s.setPlatformId);

    const selectedPlat = findById(data?.results, platformId);
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}> {selectedPlat?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map(platfrom => <MenuItem
                    onClick={() => setSelectedPlatform(platfrom.id)}
                    key={platfrom.id}>{platfrom.name}</MenuItem>)}
            </MenuList>
        </Menu >
    )
}

export default PlatformSelecter