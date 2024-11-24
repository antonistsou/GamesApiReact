import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {

    const color = (score: number) => {
        if (score > 75) return 'green'
        else if (score > 60 && score <= 76) return 'yellow'
        else return;
    }

    return (
        <Badge colorScheme={color(score)} fontSize={18}>
            {score}
        </Badge>
    )
}

export default CriticScore