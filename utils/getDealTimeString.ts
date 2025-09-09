import isTimedDeal from '@/utils/isTimedDeal';

export default function getDealTimeString(deal: Deal) {
    return isTimedDeal(deal)
        ? `Between ${deal.start} - ${deal.end}`
        : 'Anytime today';
}
