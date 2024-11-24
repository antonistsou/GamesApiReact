import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearcInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);

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