import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platform from "../data/platform";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('platforms/lists/parents');

// const usePlatforms = () => useData<Platform>('platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1_000,//24hrs
    initialData: platform
})

export default usePlatforms; 