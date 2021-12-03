import React, {useEffect, useState} from 'react';
import Map from "../components/Map";
import {useRouter} from "next/router";
import RideSelector from "../components/RideSelector";

const confirm = () => {

    const {pickup, dropoff} = useRouter().query;

    const [pickupCoordinates, setPickupCoordinates] = useState(null);
    const [dropOffCoordinates, setDropOffCoordinates] = useState(null);

    const gePickup = (pickup) => {
        // fetching the data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA',
            limit: 1,
        })).then(response => response.json()).then(data => {
            setPickupCoordinates(data.features[0].center)

        });
    }

    const dropOffCoords = (dropoff) => {
        // fetching the data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA',
            limit: 1,
        })).then(response => response.json()).then(data => {
            setDropOffCoordinates(data.features[0].center)

        });
    }

    useEffect(() => {
        gePickup(pickup);
        dropOffCoords(dropoff);
    }, [pickup, dropoff]);

    return (
        <div className="h-screen flex-1">
                <Map
                    pickupCoordinates={pickupCoordinates}
                    dropOffCoordinates={dropOffCoordinates}
                />
            <div className="flex flex-1 flex-col">
                <div  className="" >
                    <RideSelector/>
                </div>
                <div className="bg-black text-white">
                    Confirm UberX
                </div>
            </div>
        </div>
    );
};

export default confirm;
