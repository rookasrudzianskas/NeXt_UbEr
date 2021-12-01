import Head from 'next/head'
import {useEffect} from "react";
import Map from "../components/Map";
import Image from "next/image";


export default function Home() {


  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <Head>
        <title>UBER 🚚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Map />
      <div className="bg-green-500 flex-1">
          <div>
              <Image src="https://i.ibb.co/84stgjq/uber-technologies-new-2021814.jpg" />
          </div>
      </div>
    </div>
  )
}
