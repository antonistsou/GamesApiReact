import { Box, Heading } from '@chakra-ui/react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <Box padding={5}>
            <Heading>Oops</Heading>
            <p>{!isRouteErrorResponse(error) ? "Unexpected Error Occured" :
                "Pages doesnt Exist"}</p>
        </Box>
    )
}

export default ErrorPage