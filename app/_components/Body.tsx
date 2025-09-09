import React from 'react';

function Body({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-between max-w-3xl w-full mx-auto">
            {children}
        </div>
    );
}

export default Body;
