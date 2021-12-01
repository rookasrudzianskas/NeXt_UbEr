import Head from 'next/head'
import {useEffect} from "react";
import Map from "../components/Map";
import Image from "next/image";
import Header from "../components/Header";
import ActionButtons from "../components/ActionButtons";


export default function Home() {


  return (
    <div className="flex flex-col min-h-screen bg-blue-500">
      <Head>
        <title>UBER 🚚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Map />
      <div className="bg-white flex-1">
        <Header />
        <ActionButtons />
      </div>
    </div>
  )
}
