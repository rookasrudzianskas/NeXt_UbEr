import React, {useEffect} from 'react';
import"mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA';


const Map = () => {


    // const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/rokasr/ckwnbxwet0log14t5m0zzuljv',
    //     center: [-74.50, 40],
    //     zoom: 9
    // });

    useEffect(() => {
        // fires on first run 🔥
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/rokasr/ckwnbxwet0log14t5m0zzuljv',
            center: [-74.50, 40],
            zoom: 9
        });
    }, []);

    return (
        <div id={'map'} className="bg-red-500 flex-1"/>

    );
};

export default Map;
