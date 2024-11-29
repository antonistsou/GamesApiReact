import useTrailer from '../hooks/useTrailer'

interface Props {
    gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {

    const { data, error, isLoading } = useTrailer(gameId);
    const res = data?.results[0];

    if (isLoading) return;
    if (error) throw error;

    return res ?
        <video src={res?.data[480]}
            poster={res?.preview}
            controls></video>
        : null;
}

export default GameTrailer