import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameSkeleton = () => {
    return (
        <Card width='100%' paddingY='30px'>
            <Skeleton height='230px'>
            </Skeleton>
            <SkeletonText></SkeletonText>
        </Card>
    )
}

export default GameSkeleton