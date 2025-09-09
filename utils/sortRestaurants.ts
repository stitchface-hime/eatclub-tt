import bestDeal from '@/utils/bestDeal';

export default function sortRestaurants(restaurants: Restaurant[]) {
    return [...restaurants].sort((r1, r2) => {
        // This assumes there is at least one deal per restaurant
        console.log(bestDeal);
        const r1BestDeal = bestDeal(r1.deals);
        const r2BestDeal = bestDeal(r2.deals);

        return Number(r2BestDeal.discount) - Number(r1BestDeal.discount);
    });
}
