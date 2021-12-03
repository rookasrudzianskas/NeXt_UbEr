import React from 'react';
import Image from "next/image";

const Car = ({car}) => {
    return (
        <div className="flex  flex-row items-center justify-center p-2 hover:bg-gray-200 duration-250">
            <div className="flex flex-1 items-center">
                <div className="flex pr-3">
                    <Image src={car?.imgUrl} className="" width={60} height={60} />
                </div>
                <div>
                    <h3>{car?.service}</h3>
                    <h4 className="text-xs text-blue-500">5 min away</h4>
                </div>
            </div>
            <div>
                <h3 className="font-bold">$10.00</h3>
            </div>
        </div>
    );
};

export default Car;
