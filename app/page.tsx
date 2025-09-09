import React from 'react';
import Body from './_components/Body';
import RestaurantCard from './_components/RestaurantCard';
import RestaurantList from '@/app/_components/RestaurantList';
export default async function Home() {
    const data = await fetch('https://eccdn.com.au/misc/challengedata.json');
    const parsedData = (await data.json()) as Response;

    return <RestaurantList restaurants={parsedData.restaurants} />;
}
