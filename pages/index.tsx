import Head from 'next/head'
import Footer from '@components/Footer'
import Gallery from '@components/Gallery'
import Nav from '@components/Nav'

export default function Home() {
  const images = [
    "/images/img1.jpg",
    "/images/461312877_916773713636472_1088954797409986682_n.jpg",
    "/images/461477646_1060877001871250_6340102203776615204_n.jpg",
    "/images/461496035_1317206079261284_795738798636187036_n.jpg",
    "/images/462535737_1803630570401861_8753253137629141609_n.jpg",
    "/images/462540147_380307791820604_7700348161843002543_n.jpg",
    "/images/462555819_3885358561730840_6954464545120151241_n.jpg",
    "/images/462561242_2401671903520627_1206951814831809458_n.jpg",
    "/images/img5.png",
    "/images/img6.png",
    "/images/img7.png",
    "/images/img9.png",
    "/images/img12.png",
    "/images/img13.png",
    "/images/img14.jpeg",
  ]

  return (
    <>
      <Head>
        <title>Albérlet Kőbánya-Kispesten | 57 m² bútorozott lakás</title>
        <meta name="description" content="Kiadó bútorozott lakás Kőbánya-Kispesten. 57 m², 7. emelet, lift, dupla légkondi, belső parkoló. Köki metró közelében." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${images[0]})` }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-tag">Kiadó lakás</span>
          <h1>Albérlet Kőbánya-Kispesten</h1>
          <p className="hero-sub">57 m²&ensp;&middot;&ensp;7. emelet&ensp;&middot;&ensp;Bútorozott&ensp;&middot;&ensp;Dupla klíma</p>
        </div>
        <div className="scroll-indicator">
          <span>Görgess</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* Features */}
      <section id="jellemzok" className="section features-section">
        <div className="section-inner">
          <h2 className="section-title">Jellemzők</h2>
          <p className="section-subtitle">Minden, amit tudni kell a lakásról</p>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-label">Cím</span>
              <p className="feature-value">1108 Budapest,<br />Gergely utca 128A</p>
            </div>
            <div className="feature-card">
              <span className="feature-label">Méret</span>
              <p className="feature-value">57 m&#178;</p>
            </div>
            <div className="feature-card">
              <span className="feature-label">Emelet</span>
              <p className="feature-value">7. emelet, lift</p>
            </div>
            <div className="feature-card">
              <span className="feature-label">Felszereltség</span>
              <p className="feature-value">Bútorozott,<br />dupla légkondi</p>
            </div>
            <div className="feature-card">
              <span className="feature-label">Parkolás</span>
              <p className="feature-value">Belső zárt téren</p>
            </div>
            <div className="feature-card">
              <span className="feature-label">Közlekedés</span>
              <p className="feature-value">Köki metró<br />10 perc séta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Terms */}
      <section id="feltetelek" className="section pricing-section">
        <div className="section-inner">
          <div className="pricing-layout">
            <div className="pricing-info">
              <h2 className="section-title">Feltételek</h2>
              <ul className="pricing-list">
                <li>
                  <span className="pricing-label">Havi díj</span>
                  <span className="pricing-val">250.000 Ft + rezsi</span>
                </li>
                <li>
                  <span className="pricing-label">Közös költség</span>
                  <span className="pricing-val">25.000 Ft / hó</span>
                </li>
                <li>
                  <span className="pricing-label">Kaució</span>
                  <span className="pricing-val">2 havi</span>
                </li>
                <li>
                  <span className="pricing-label">Fizetés</span>
                  <span className="pricing-val">1 hónap előre</span>
                </li>
                <li>
                  <span className="pricing-label">Szerződés</span>
                  <span className="pricing-val">1 éves</span>
                </li>
                <li>
                  <span className="pricing-label">Egyéb</span>
                  <span className="pricing-val">Kiköltözési nyilatkozat közjegyzőnél</span>
                </li>
                <li>
                  <span className="pricing-label">Beköltözés</span>
                  <span className="pricing-val">2026. Április 1.</span>
                </li>
              </ul>
            </div>
            <div className="pricing-card">
              <p className="pricing-amount">250.000 Ft</p>
              <p className="pricing-period">+ rezsi / hónap</p>
              <p className="pricing-note">2026. Április 1-től (nem tréfa)</p>
              <a href="viber://chat?number=%2B36203387096" className="cta-button">Írj Viberen</a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="section gallery-section">
        <div className="section-inner">
          <h2 className="section-title">Galéria</h2>
          <p className="section-subtitle">Kattints a képekre a nagyításhoz</p>
          <Gallery images={images} />
        </div>
      </section>

      {/* Map */}
      <section id="terkep" className="section map-section">
        <div className="section-inner">
          <h2 className="section-title">Elhelyezkedés</h2>
          <p className="section-subtitle">Kőbánya-Kispest, a Köki metró közelében</p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4060.193311660896!2d19.159166221357374!3d47.46340272267262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c31b53ec6c8d%3A0xdb9732d37775f3d7!2sBudapest%2C%20Gergely%20u.%20128a%2C%201108!5e0!3m2!1sen!2shu!4v1639600615579!5m2!1sen!2shu"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Apartment location on Google Maps"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kapcsolat" className="contact-section">
        <h2 className="section-title">Érdeklődj most</h2>
        <p className="contact-sub">Április 1-től költözhető bútorozott lakás Kőbánya-Kispesten</p>
        <a href="viber://chat?number=%2B36203387096" className="contact-viber">Írj Viberen</a>
        <p className="contact-number">+36 20 338 7096</p>
      </section>

      <Footer />
    </>
  )
}
