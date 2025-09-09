import RestaurantAction from '@/app/[slug]/_components/RestaurantAction';
import RestaurantImage from '@/app/_components/RestaurantImage';
import getDealTimeString from '@/utils/getDealTimeString';

interface Props {
    deal: Deal;
}

function RestaurantDeal({ deal }: Props) {
    const qtyLeft = Number(deal.qtyLeft);

    return (
        <div className="w-full flex p-4">
            <div className="flex-1">
                <div className="text-xl text-red-700 font-bold">
                    {deal.lightning && '⚡'}
                    {deal.discount}% Off{deal.dineIn ? ' - Dine in' : ''}
                </div>
                <div className="text-gray-600">{getDealTimeString(deal)}</div>
                <div className="text-xs text-gray-600">
                    {qtyLeft} Deal{qtyLeft === 1 ? '' : 's'} Left
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <button
                    type="button"
                    className="border-red-700 border-1 text-red-700 rounded-full px-6 py-2"
                >
                    Redeem
                </button>
            </div>
        </div>
    );
}

export default RestaurantDeal;
