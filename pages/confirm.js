import React from 'react';
import Map from "../components/Map";

const confirm = () => {
    return (
        <div className="h-screen">
            <div className=" flex-1 h-96">
                <Map />
            </div>
            <div className=" flex-1">
                Ride selector
            </div>
        </div>
    );
};

export default confirm;
