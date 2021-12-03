import React, {useEffect} from 'react';
import Map from "../components/Map";

const confirm = () => {


    const gePickup = () => {
        const pickup = "Toms River"
        // fetching the data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA',
            limit: 1,
        })).then(response => response.json()).then(data => {
            console.log(data.features[0].center)

        });
    }

    const dropOffCoords = () => {
        const dropOff = "Lakewood"
        // fetching the data
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA',
            limit: 1,
        })).then(response => response.json()).then(data => {
            console.log(data.features[0].center)

        });
    }

    useEffect(() => {
        gePickup();
        dropOffCoords();
    }, []);

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
