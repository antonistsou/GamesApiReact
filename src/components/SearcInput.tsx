import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store'

//s* selecter to render the componet only when this value changes 

const SearcInput = () => {
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) setSearchText(ref.current.value);

            }}>
                <InputGroup>
                    <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
                    <Input ref={ref} borderRadius={20} placeholder='Search for games...' variant='filled' ></Input>
                </InputGroup>
            </form>
        </>
    )
}

export default SearcInput