import React, {useEffect, useState} from 'react';
import Map from "../components/Map";
import {useRouter} from "next/router";

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
        <div className="h-screen">
            <div className=" flex-1 h-96">
                <Map
                    pickupCoordinates={pickupCoordinates}
                    dropOffCoordinates={dropOffCoordinates}
                />
            </div>
            <div className=" flex-1">
                Ride selector
                {pickupCoordinates}
                {dropOffCoordinates}
            </div>
        </div>
    );
};

export default confirm;
