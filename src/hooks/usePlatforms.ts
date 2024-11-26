import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platform from "../data/platform";

const apiClient = new APIClient<Platform>('platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useData<Platform>('platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1_000,//24hrs
    initialData: platform
})

export default usePlatforms; 