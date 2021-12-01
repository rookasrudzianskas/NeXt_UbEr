import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 bg-blue-500">
      <Head>
        <title>UBER 🚚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-red-500 flex-1">Map</div>
      <div className="bg-green-500 flex-1">Start</div>
    </div>
  )
}
