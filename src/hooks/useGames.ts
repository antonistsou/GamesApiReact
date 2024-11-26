import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const apiClient = new APIClient<Game>('games');

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['Games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params:
            {
                genres: gameQuery.genre,
                parent_platforms: gameQuery.platforms,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText,
                page: pageParam
            },
        }),
        getNextPageParam: (lastpage, allpages) => {
            let all = allpages.length;
            all++;
            return lastpage.next ? all : undefined;
        },
        staleTime: 24 * 60 * 60 * 1_000, //24hrs,
    })

// useData<Game>('games',
//     {
//         params:
//         {
//             genres: gameQuery.genre?.id,
//             platforms: gameQuery.platforms?.id,
//             ordering: gameQuery.sortOrder,
//             search: gameQuery.searchText
//         }
//     },
//     [gameQuery]);

export default useGames;