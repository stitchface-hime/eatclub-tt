import RestaurantAction from '@/app/[slug]/_components/RestaurantAction';
import RestaurantDeal from '@/app/[slug]/_components/RestaurantDeal';
import RestaurantImage from '@/app/_components/RestaurantImage';
import Favorite from '@/app/_icons/Favorite.icon';
import LocationOn from '@/app/_icons/LocationOn.icon';
import MenuBook from '@/app/_icons/MenuBook.icon';
import PhoneInTalk from '@/app/_icons/PhoneInTalk.icon';
import PinDrop from '@/app/_icons/PinDrop';
import Schedule from '@/app/_icons/Schedule.icon';
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
            <div className="w-full flex justify-around border-b-1 border-b-gray-200">
                <RestaurantAction
                    graphic={<MenuBook size={28} />}
                    label="Menu"
                />
                <RestaurantAction
                    graphic={<PhoneInTalk size={28} />}
                    label="Call us"
                />
                <RestaurantAction
                    graphic={<PinDrop size={28} />}
                    label="Location"
                />
                <RestaurantAction
                    graphic={<Favorite size={28} />}
                    label="Favourite"
                />
            </div>
            <div className="p-4 border-b-1 border-b-gray-200  flex flex-col gap-2 justify-center">
                <h1 className="text-2xl font-bold text-center">
                    {restaurant.name}
                </h1>
                <div className="text-center text-gray-600 ">
                    {restaurant.cuisines.join(' • ')}
                </div>
            </div>
            <div className="p-4 border-b-1 border-b-gray-200 flex flex-col gap-4">
                <div className="flex gap-4">
                    <div>
                        <Schedule size={24} />
                    </div>
                    <div>
                        Hours: {restaurant.open} - {restaurant.close}
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <LocationOn size={24} />
                    </div>
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
