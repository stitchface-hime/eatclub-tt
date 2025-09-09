import RestaurantDetails from '@/app/[slug]/_components/RestaurantDetails';
import Body from '@/app/_components/Body';
import Link from 'next/link';

interface Props {
    params: Promise<{ slug: string }>;
}

async function RestaurantPage({ params }: Props) {
    const { slug } = await params;
    const data = await fetch('https://eccdn.com.au/misc/challengedata.json');
    const parsedData = (await data.json()) as Response;

    const restaurant = parsedData.restaurants.find((r) => r.objectId === slug);

    return (
        <Body>
            <div className="overflow-y-auto w-full">
                <div className="px-8 py-4">
                    <Link href="/" className="flex gap-4">
                        <div>B</div>Back
                    </Link>
                </div>
                {restaurant ? (
                    <RestaurantDetails restaurant={restaurant} />
                ) : (
                    'Details for restaurant could not be retrieved.'
                )}
            </div>
        </Body>
    );
}

export default RestaurantPage;
