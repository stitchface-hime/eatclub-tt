export default function bestDeal(deals: Deal[]) {
    return [...deals].sort(
        (d1, d2) => Number(d2.discount) - Number(d1.discount)
    )[0];
}
