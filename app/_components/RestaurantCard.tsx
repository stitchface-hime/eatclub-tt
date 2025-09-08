import isTimedDeal from '@/utils/isTimedDeal';
import Image from 'next/image';
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
                        <Image
                            className="rounded-md"
                            src={imageLink}
                            alt={name}
                            fill={true}
                        />
                        {featuredDeal && (
                            <div className="relative inline-block p-1 rounded-sm bg-red-600 text-white">
                                <div className="font-bold">{`${
                                    featuredDeal.discount
                                }% off${
                                    featuredDeal.dineIn ? ' - Dine in' : ''
                                }`}</div>
                                <div className="text-xs">
                                    {isTimedDeal(featuredDeal)
                                        ? `Between ${featuredDeal.start} - ${featuredDeal.end}`
                                        : 'Anytime today'}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-row">
                        <div className="p-2 w-full">
                            <h1 className="text-lg font-bold">{name}</h1>
                            <div>
                                {address1}, {suburb}
                            </div>
                            <div className="text-xs font-bold">
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
