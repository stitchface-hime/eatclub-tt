import React from 'react';

function Body({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-between max-w-3xl mx-auto p-4 ">
            {children}
        </div>
    );
}

export default Body;
