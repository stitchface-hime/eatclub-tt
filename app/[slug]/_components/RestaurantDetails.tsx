import RestaurantAction from '@/app/[slug]/_components/RestaurantAction';
import RestaurantDeal from '@/app/[slug]/_components/RestaurantDeal';
import RestaurantImage from '@/app/_components/RestaurantImage';
import React from 'react';

interface Props {
    restaurant: Restaurant;
}

function RestaurantDetails({ restaurant }: Props) {
    return (
        <div className="w-full">
            <div className="relative w-full h-80">
                <RestaurantImage
                    src={restaurant.imageLink}
                    alt={restaurant.name}
                />
            </div>
            <div className="w-full flex justify-between border-b-1 border-b-gray-200">
                <RestaurantAction graphic="A" label="Menu" />
                <RestaurantAction graphic="B" label="Call us" />
                <RestaurantAction graphic="C" label="Location" />
                <RestaurantAction graphic="D" label="Favourite" />
            </div>
            <div className="p-4 border-b-1 border-b-gray-200  flex flex-col gap-2 justify-center">
                <h1 className="text-2xl font-bold text-center">
                    {restaurant.name}
                </h1>
                <div className="text-center text-gray-600 ">
                    {restaurant.cuisines.join(' • ')}
                </div>
            </div>
            <div className="p-4 border-b-1 border-b-gray-200 flex flex-col">
                <div className="flex gap-4">
                    <div>A</div>
                    <div>
                        Hours: {restaurant.open} - {restaurant.close}
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>B</div>
                    <div>
                        {restaurant.address1}, {restaurant.suburb}
                    </div>
                </div>
            </div>
            <div>
                {[...restaurant.deals]
                    .sort((d1, d2) => Number(d2.discount) - Number(d1.discount))
                    .map((deal, idx) => (
                        <div
                            key={deal.objectId}
                            className={`${
                                idx !== restaurant.deals.length - 1
                                    ? 'border-b-1 border-b-gray-200'
                                    : ''
                            }`}
                        >
                            <RestaurantDeal deal={deal} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default RestaurantDetails;
