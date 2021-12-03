import React from 'react';
import Car from "./Car";
import {carList} from "../assets/carList";

const RideSelector = () => {
    return (
        <div className="">
            <div className="text-gray-500 flex text-center border-b w-full">
                <span className="text-center ml-10 mt-4 mr-10">Choose a ride, or swipe to the bottom m to create a new ride.</span>
            </div>

            <div className="">
                {carList.map((car, index) => (
                    <Car key={index} car={car} />
                ))}
            </div>
        </div>
    );
};

export default RideSelector;
