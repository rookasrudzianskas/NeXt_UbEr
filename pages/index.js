import Head from 'next/head'
import"mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9rYXNyIiwiYSI6ImNrc3VjdHM4YjBrdXcyb2xzaDlhNnJjbjMifQ.QptDnLGGkB4ffA97KWL6DA';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <Head>
        <title>UBER 🚚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-red-500 flex-1">Map</div>
      <div className="bg-green-500 flex-1">Start</div>
    </div>
  )
}
