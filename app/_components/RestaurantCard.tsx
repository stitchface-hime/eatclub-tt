import RestaurantImage from '@/app/_components/RestaurantImage';
import getDealTimeString from '@/utils/getDealTimeString';
import isTimedDeal from '@/utils/isTimedDeal';

import Link from 'next/link';

interface Props extends Omit<Restaurant, 'open' | 'close' | 'deals'> {
    featuredDeal?: Deal;
}

function RestaurantCard({
    objectId,
    name,
    address1,
    suburb,
    cuisines,
    imageLink,
    featuredDeal,
}: Props) {
    return (
        <Link href={`/${objectId}`}>
            <div className="flex flex-row ">
                <div className="flex flex-col w-full">
                    <div className="relative p-2 h-60">
                        <RestaurantImage src={imageLink} alt={name} rounded />
                        {featuredDeal && (
                            <div className="relative inline-block px-2 py-1 rounded-sm bg-red-700 text-white">
                                <div className="font-bold">{`${
                                    featuredDeal.discount
                                }% off${
                                    featuredDeal.dineIn ? ' - Dine in' : ''
                                }`}</div>
                                <div className="text-xs">
                                    {getDealTimeString(featuredDeal)}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-row">
                        <div className="p-2 w-full">
                            <h1 className="text-lg font-bold">{name}</h1>
                            <div className="text-gray-600">
                                {address1}, {suburb}
                            </div>
                            <div className="text-xs font-bold text-gray-600">
                                {cuisines.join(', ')}
                            </div>
                        </div>
                        <div>F</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RestaurantCard;
