import React from 'react';
import Map from "../components/Map";

const confirm = () => {


    const getCoorinates = () => {
        const location = "Toms River"
        // fetching the data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA`).then(response => response.json()).then(data => {
            console.log(data)

        })
    }

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
