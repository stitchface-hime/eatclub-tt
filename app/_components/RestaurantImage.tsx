'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
    src: string;
    alt: string;
}

function RestaurantImage({ src, alt }: Props) {
    const [error, setError] = useState(false);

    return (
        <Image
            className="rounded-md object-cover"
            src={error ? '/globe.svg' : src}
            alt={alt}
            fill={true}
            onError={() => setError(true)}
        />
    );
}

export default RestaurantImage;
