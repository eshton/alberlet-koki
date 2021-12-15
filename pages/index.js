import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const images = [];
  for(let i = 0; i<11; i++) {
    images.push(
        <img key={i} src={`/images/IMG_64${85+i}.png`} style={{width:'80%'}}/>
    );
    images.push(<hr></hr>)
  }
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Albérlet kiadó" />
        <p>Pénz: 150.000 havonta kápéban</p>
        {images}
      </main>

      <Footer />
    </div>
  )
}
