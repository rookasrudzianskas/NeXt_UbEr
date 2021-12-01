import Head from 'next/head'
import"mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';
import {useEffect} from "react";

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA';

export default function Home() {

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
            zoom: 3
        });
    }, []);

  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <Head>
        <title>UBER 🚚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={'map'} className="bg-red-500 flex-1">Map</div>
      <div className="bg-green-500 flex-1">Start</div>
    </div>
  )
}
