import { useInfiniteQuery } from "@tanstack/react-query";

export default function useFetchCats() {
    const getCats = async ({ pageParam = 0 }) => {
        const res = await (
            await fetch(
                `https://api.thecatapi.com/v1/breeds?limit=10&page=${pageParam}`
            )
        ).json();

        return {
            data: res,
            nextPage: pageParam + 1,
        };
    };

    return useInfiniteQuery([""], getCats, {
        getNextPageParam: (lastPage) => {
            if (lastPage.data.length < 10) return undefined;

            return lastPage.nextPage;
        },
    });
}