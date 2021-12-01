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
      <div className="bg-white flex-1">
          <div className="">
              <Image className="h-28" src="https://i.ibb.co/84stgjq/uber-technologies-new-2021814.jpg" />
              <div className="">
                  <div className="">Rokas Rudzianskas</div>
                  <Image className="h-28 w-28" src={'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK_400x400.jpg'} />
              </div>
          </div>
      </div>
    </div>
  )
}
