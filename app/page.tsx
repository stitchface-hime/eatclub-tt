import Image from 'next/image';

export default async function Home() {
    const data = await fetch('https://eccdn.com.au/misc/challengedata.json');
    const restaurant = await data.json();
    
    return <div className="font-sans"></div>;
}
