import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[]
}

const DefinitionItem = ({ term, children }: Props) => {
    return (
        <Box marginY={5} paddingEnd={15}>
            <Heading as='dt' fontSize={'xl'} color='gray.500'>{term}</Heading>
            {children}
        </Box>
    )
}

export default DefinitionItem