export default function isTimedDeal(deal: Deal): deal is TimedDeal {
    return 'start' in deal && 'end' in deal;
}
