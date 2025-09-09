import Body from '@/app/_components/Body';
import RestaurantImage from '@/app/_components/RestaurantImage';
import React from 'react';

interface Props {
    graphic: React.ReactNode;
    label: string;
}

function RestaurantAction({ graphic, label }: Props) {
    return (
        <button
            type="button"
            className="cursor-pointer p-4 flex flex-col justify-center items-center"
        >
            {graphic}
            <div className="text-sm">{label}</div>
        </button>
    );
}

export default RestaurantAction;
