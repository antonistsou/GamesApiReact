import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('games');

const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['Games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiClient.getAll({
            params:
            {
                genres: gameQuery.genreId,
                parent_platforms: gameQuery.platformId,
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
}

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