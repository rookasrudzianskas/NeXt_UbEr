import React, {useEffect} from 'react';
import"mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA';


const Map = (props) => {


    // const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/rokasr/ckwnbxwet0log14t5m0zzuljv',
    //     center: [-74.50, 40],
    //     zoom: 9
    // });


    const addToMap = (map) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat([-74.50, 40])
            .addTo(map);
    }

    useEffect(() => {
        console.log('pickupCoordinates', props.pickupCoordinates);
        console.log('dropOffCoordinates', props.dropOffCoordinates);
    }, []);

    useEffect(() => {
        // fires on first run 🔥
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/rokasr/ckwnbxwet0log14t5m0zzuljv',
            center: [-74.50, 40],
            zoom: 9
        });
        addToMap(map);
    }, []);

    return (
        <div id={'map'} className="bg-gray-500 h-96"/>

    );
};

export default Map;
