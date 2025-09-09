'use client';

import Body from '@/app/_components/Body';
import RestaurantCard from '@/app/_components/RestaurantCard';
import bestDeal from '@/utils/bestDeal';
import filterRestaurants from '@/utils/filterRestaurants';
import sortRestaurants from '@/utils/sortRestaurants';
import React, { useState } from 'react';

interface Props {
    restaurants: Restaurant[];
}

function RestaurantList({ restaurants }: Props) {
    const [search, setSearch] = useState('');
    const results = sortRestaurants(filterRestaurants(restaurants, search));

    return (
        <div className="relative flex flex-col overflow-hidden">
            <div className="bg-white py-4 border-b-1">
                <div className="flex gap-4 max-w-3xl mx-auto px-8">
                    <div>A</div>
                    <input
                        className="w-full focus-visible:outline-none"
                        placeholder="e.g. chinese, pizza"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            <div className="overflow-y-auto py-4">
                <Body>
                    <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-8 gap-y-4">
                        {results.length === 0
                            ? 'No results found!'
                            : results.map((r) => (
                                  <React.Fragment key={r.objectId}>
                                      <RestaurantCard
                                          objectId={r.objectId}
                                          name={r.name}
                                          address1={r.address1}
                                          suburb={r.suburb}
                                          cuisines={r.cuisines}
                                          imageLink={r.imageLink}
                                          featuredDeal={bestDeal(r.deals)}
                                      />
                                  </React.Fragment>
                              ))}
                    </div>
                </Body>
            </div>
        </div>
    );
}

export default RestaurantList;
