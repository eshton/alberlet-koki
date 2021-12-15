import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img8.png",
    "/images/img9.png",
    "/images/img10.png",
    "/images/img11.png",
    "/images/img12.png",
    "/images/img13.png",
    "/images/img14.jpeg",
  ];
  const imagesElements = [];
  let i = 0;
  images.forEach((image, index) => {
    imagesElements.push(<img key={i++} src={image} style={{width:'80%'}}/>);
    imagesElements.push(<hr></hr>);
  })

  return (
    <div className="container">
      <Head>
        <title>Albérlet Kőbánya Kispesten</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header title="Albérlet kiadó" />
        <h2>Tudnivalók</h2>
        <ul>
          <li>Cím: 1108 Budapet, Gergely utca 128A</li>
          <li>7. emelet, lift </li>
          <li>Méret: 57 m&#178;</li>
          <li>Bútorozott, dupla légkondi</li>
          <li>Parkoló belső zárt téren</li>
          <li>Köki metró 10 perc séta</li>
          <li>Azonnal költözhető, 2 havi kaució + egy hónap előre</li>
          <li>Közös költség: 15.000</li>
          <li>Ár: 150.000 + rezsi / hónap</li>
          <li>Érdeklődni: +36203387096</li>
        </ul>
        <h2>Térkép</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4060.193311660896!2d19.159166221357374!3d47.46340272267262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c31b53ec6c8d%3A0xdb9732d37775f3d7!2sBudapest%2C%20Gergely%20u.%20128a%2C%201108!5e0!3m2!1sen!2shu!4v1639600615579!5m2!1sen!2shu" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

        <h2>Képek</h2>
        {imagesElements}
      </main>

      <Footer />
    </div>
  )
}
