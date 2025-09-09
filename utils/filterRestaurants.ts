export default function filterRestaurants(
    restaurants: Restaurant[],
    search: string
) {
    const caseInsensitiveSearch = search.toLocaleLowerCase();

    return restaurants.filter((r) => {
        return (
            !!r.name.toLocaleLowerCase().match(caseInsensitiveSearch) ||
            r.cuisines.reduce(
                (prev, curr) =>
                    prev ||
                    !!curr.toLocaleLowerCase().match(caseInsensitiveSearch),
                false
            )
        );
    });
}
