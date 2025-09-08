import React from 'react';
import Body from './_components/Body';
import RestaurantCard from './_components/RestaurantCard';
export default async function Home() {
    const data = await fetch('https://eccdn.com.au/misc/challengedata.json');
    const parsedData = (await data.json()) as Response;

    console.log(parsedData);
    return (
        <Body>
            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-4 gap-y-2">
                {parsedData.restaurants.map((r) => (
                    <React.Fragment key={r.objectId}>
                        <RestaurantCard
                            objectId={r.objectId}
                            name={r.name}
                            address1={r.address1}
                            suburb={r.suburb}
                            cuisines={r.cuisines}
                            imageLink={r.imageLink}
                            featuredDeal={
                                r.deals.sort(
                                    (d1, d2) =>
                                        Number(d1.discount) -
                                        Number(d2.discount)
                                )[0]
                            }
                        />
                    </React.Fragment>
                ))}
            </div>
        </Body>
    );
}
