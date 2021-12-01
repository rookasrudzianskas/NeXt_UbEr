import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-4 bg-blue-500">
      <Head>
        <title>UBER 🚚</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-red-500">Map</div>
      <div className="bg-green-500">Start</div>
    </div>
  )
}
