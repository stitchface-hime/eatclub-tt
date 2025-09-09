import JapaneseCurry from '@/app/_icons/JapaneseCurry.icon';
import Tune from '@/app/_icons/Tune.icon';
import User from '@/app/_icons/User.icon';

function Header() {
    return (
        <div className="w-full border-b-1 border-b-gray-200 sticky top-0 bg-white z-10">
            <div className="flex justify-between max-w-3xl mx-auto p-4">
                <button type="button" className="cursor-pointer">
                    <User size={24} />
                </button>
                <div>
                    <JapaneseCurry size={24} fill="#c10007" />
                </div>
                <button type="button" className="cursor-pointer">
                    <Tune size={24} />
                </button>
            </div>
        </div>
    );
}

export default Header;
