import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>('genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1_000, //24hrs,
    initialData: genres
})

// const useGenres = useData<Genre>('genres');
// const useGenres = () => ({ data: genres, isLoading: false, error: null });



export default useGenres;