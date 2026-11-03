
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [time, setTime] = useState({});
  
  useEffect(() => {
    const update = () => {
      const difference = Math.max(
        0,
        new Date("2026-12-20T11:30:00+05:30").getTime() - Date.now()
      );

      setTime({
        days: Math.floor(difference / 86400000),
        hours: Math.floor(difference / 3600000) % 24,
        minutes: Math.floor(difference / 60000) % 60,
        seconds: Math.floor(difference / 1000) % 60
      });
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="site">
      <div className="background-flower flower-one">✿</div>
      <div className="background-flower flower-two">❀</div>

      {!opened && (
        <div className="opening">
          <div className="opening-frame">
            <div className="top-flower">❀</div>
            <p className="opening-label">THE WEDDING INVITATION</p>
            <div className="opening-line">✦ ───────── ✦</div>
            <p className="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

            <div className="envelope">
              <div className="envelope-flap">✧</div>
              <div className="envelope-letter">
                <span>S & W</span>
              </div>
            </div>

            <h1 className="opening-names">
              Sadiya <i>&</i> Waseem
            </h1>
            <p className="opening-date">20 DECEMBER 2026 · KOLAR</p>

            <button className="open-invitation" onClick={() => setOpened(true)}>
              OPEN YOUR INVITATION <span>↗</span>
            </button>
            <p className="opening-footer">A NEW CHAPTER BEGINS</p>
          </div>
        </div>
      )}

      <nav className="navigation">
        <span className="nav-brand">S <i>&</i> W</span>
        <div>
          <button onClick={() => scrollTo("home")}>HOME</button>
          <button onClick={() => scrollTo("story")}>INVITATION</button>
          <button onClick={() => scrollTo("details")}>DETAILS</button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-inner">
          <p className="overline">TOGETHER WITH OUR FAMILIES</p>
          <div className="flower-divider">❀</div>
          <p className="hero-small">WE INVITE YOU TO CELEBRATE THE WEDDING OF</p>
          <h1>
            Sadiya
            <span>&</span>
            Waseem
          </h1>
          <p className="hero-description">
            Two souls, one beautiful journey.
            <br />
            A lifetime of love begins here.
          </p>
          <div className="hero-date">SUNDAY · 20 · DECEMBER · 2026</div>
          <button className="discover" onClick={() => scrollTo("story")}>
            DISCOVER OUR INVITATION ↓
          </button>
        </div>
        <div className="hero-bottom">WITH LOVE & THE BLESSINGS OF ALLAH</div>
      </section>

      <section className="story section" id="story">
        <p className="overline">A BEAUTIFUL BEGINNING</p>
        <div className="flower-divider">✿</div>
        <h2>Our special day</h2>
        <p className="story-copy">
          With the blessings of Allah and the love of our families,
          we joyfully invite you to be part of a beautiful new chapter
          as we begin our journey together.
        </p>
        <div className="couple-names">Sadiya <i>&</i> Waseem</div>
        <div className="flower-divider">✧</div>
        <p className="prayer">
          May Allah bless our union with endless love, mercy,
          understanding and happiness. Ameen.
        </p>
      </section>

      <section className="countdown section">
        <p className="overline">SAVE THE DATE</p>
        <h2>Until forever begins</h2>
        <div className="timer">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div className="timer-box" key={unit}>
              <strong>{String(time[unit] ?? 0).padStart(2, "0")}</strong>
              <span>{unit}</span>
            </div>
          ))}
        </div>
        <p className="countdown-date">20 DECEMBER 2026 · 11:30 AM</p>
      </section>

      <section className="details section" id="details">
        <p className="overline">THE CELEBRATION</p>
        <div className="flower-divider">❀</div>
        <h2>Wedding details</h2>
        <div className="detail-card">
          <div className="detail-icon">✧</div>
          <p className="detail-label">THE DATE</p>
          <h3>Sunday, 20 December 2026</h3>
          <p>11:30 in the morning</p>
          <div className="detail-separator">✦</div>
          <div className="detail-icon">⌖</div>
          <p className="detail-label">THE VENUE</p>
          <h3>Kabba Convention Hall</h3>
          <p>
            St. Anne's High School, Near Bypass,
            <br />
            Kolar – 563101
          </p>
          <a
            className="location-button"
            href="https://www.google.com/maps/search/?api=1&query=Kabba+Convention+Hall+St+Annes+High+School+Near+Bypass+Kolar+563101"
            target="_blank"
            rel="noreferrer"
          >
            FIND US ON MAP ↗
          </a>
        </div>
      </section>

      <section className="closing section">
        <div className="flower-divider">✿</div>
        <p className="overline">YOUR PRESENCE IS OUR PRESENT</p>
        <h2>Celebrate with us</h2>
        <p>
          We cannot wait to share this special day with you.
          Your presence and duas will make it even more meaningful.
        </p>
        <div className="closing-names">Sadiya & Waseem</div>
        <p className="closing-date">20 · 12 · 2026</p>
        <p className="closing-blessing">WITH LOVE, ALWAYS</p>
        <div className="flower-divider">✦ ─── ❀ ─── ✦</div>
      </section>

      <footer>
        MADE WITH LOVE FOR OUR SPECIAL DAY
        <br />
        SADIYA & WASEEM · 2026
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f8f2e9; }
        button { font: inherit; }
        .site {
          background: #f8f2e9;
          color: #4d3433;
          font-family: Georgia, "Times New Roman", serif;
          overflow: hidden;
          position: relative;
        }
        .opening {
          position: fixed;
          inset: 0;
          z-index: 20;
          background: radial-gradient(circle, #fffaf0, #ead9c5);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;
          animation: fadeIn .8s ease;
        }
        .opening-frame {
          position: relative;
          border: 1px solid #b79768;
          outline: 1px solid #b79768;
          outline-offset: 7px;
          width: min(570px, 90vw);
          min-height: 590px;
          padding: 45px 18px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .top-flower { font-size: 38px; color: #a87952; margin-bottom: 18px; }
        .opening-label, .overline {
          font: 10px Arial, sans-serif;
          letter-spacing: 4px;
          color: #9c7854;
        }
        .opening-line, .flower-divider { color: #b18b60; margin: 22px 0; }
        .bismillah { color: #8c6549; font-size: 21px; }
        .envelope {
          width: 140px;
          height: 95px;
          background: #6b263d;
          position: relative;
          margin: 25px auto 15px;
          box-shadow: 0 8px 20px #4d253522;
        }
        .envelope:before, .envelope:after {
          content: "";
          position: absolute;
          bottom: 0;
          border-style: solid;
          border-width: 48px 70px;
          border-color: transparent transparent #853c50 transparent;
        }
        .envelope:after { border-color: transparent #762d43 #762d43 transparent; }
        .envelope-flap {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 70px solid transparent;
          border-right: 70px solid transparent;
          border-top: 55px solid #a65e6d;
          z-index: 2;
          color: #f4d9a9;
          text-align: center;
          padding-top: 7px;
        }
        .envelope-letter {
          position: absolute;
          top: 15px;
          left: 48px;
          z-index: 1;
          color: #b58c59;
          background: #fff5e5;
          width: 44px;
          height: 65px;
          padding-top: 20px;
          font-size: 11px;
        }
        .opening-names {
          font-size: clamp(34px, 8vw, 52px);
          font-weight: normal;
          font-style: italic;
          color: #64273a;
          margin: 15px 0 5px;
        }
        .opening-names i { color: #b18b60; font-size: 30px; }
        .opening-date, .hero-date {
          font: 10px Arial, sans-serif;
          letter-spacing: 3px;
          color: #9c7854;
          margin: 20px 0;
        }
        .open-invitation, .discover, .location-button {
          border: 1px solid #9e7952;
          padding: 15px 23px;
          background: #672b40;
          color: #fff2df;
          font: 10px Arial, sans-serif;
          letter-spacing: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: .3s;
        }
        .open-invitation:hover, .discover:hover, .location-button:hover {
          background: #9d704f;
        }
        .opening-footer {
          color: #a58a6b;
          font: 9px Arial, sans-serif;
          letter-spacing: 3px;
          margin-top: 35px;
        }
        .navigation {
          height: 65px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 7%;
          background: #fffaf2;
          border-bottom: 1px solid #e7d8c4;
        }
        .nav-brand { color: #682c40; font-size: 23px; font-style: italic; }
        .nav-brand i { color: #b18b60; }
        .navigation button {
          border: 0;
          background: none;
          color: #765d4c;
          font: 9px Arial, sans-serif;
          letter-spacing: 1px;
          padding: 10px;
          cursor: pointer;
        }
        .hero {
          min-height: 690px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 90px 20px 45px;
          position: relative;
          color: #fff1de;
          background:
            radial-gradient(ellipse at 50% 45%, #854a58, transparent 65%),
            linear-gradient(135deg, #3e1929, #6a2c40 55%, #351421);
        }
        .hero:before {
          content: "";
          position: absolute;
          inset: 20px;
          border: 1px solid #c4a477;
          pointer-events: none;
        }
        .hero-inner { position: relative; z-index: 1; }
        .hero .overline, .hero-small { color: #e2c9a7; }
        .hero-small {
          font: 9px Arial, sans-serif;
          letter-spacing: 3px;
          margin: 30px 0;
        }
        .hero h1 {
          font-size: clamp(64px, 13vw, 110px);
          font-style: italic;
          font-weight: normal;
          line-height: .95;
          margin: 15px 0;
          color: #f8e6c9;
        }
        .hero h1 span {
          display: block;
          color: #d0aa73;
          font-size: 43px;
          margin: 18px;
        }
        .hero-description { line-height: 2; color: #f0ddc5; font-size: 15px; }
        .hero-date { color: #e7cda9; margin: 30px 0; }
        .discover { background: transparent; color: #f7e7d0; }
        .hero-bottom {
          position: absolute;
          bottom: 30px;
          font: 9px Arial, sans-serif;
          letter-spacing: 3px;
          color: #d7b991;
        }
        .section { text-align: center; padding: 90px 22px; }
        .section h2 {
          font-size: clamp(32px, 7vw, 49px);
          font-style: italic;
          font-weight: normal;
          color: #672b40;
          margin: 15px 0 30px;
        }
        .story { max-width: 850px; margin: auto; }
        .story-copy, .prayer, .closing > p:not(.overline) {
          color: #786459;
          max-width: 580px;
          margin: 25px auto;
          font-size: 16px;
          line-height: 2.1;
        }
        .couple-names, .closing-names {
          font-size: 38px;
          color: #9b7049;
          font-style: italic;
          margin: 30px 0;
        }
        .countdown {
          background: #eadcc9;
          padding: 80px 15px;
        }
        .timer {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 13px;
          margin: 35px auto;
        }
        .timer-box {
          width: 105px;
          padding: 22px 8px;
          border: 1px solid #b38b60;
          background: #f8f0e5;
        }
        .timer-box strong {
          display: block;
          font-size: 38px;
          font-weight: normal;
          color: #692b40;
        }
        .timer-box span {
          display: block;
          margin-top: 8px;
          color: #9a7857;
          text-transform: uppercase;
          font: 9px Arial, sans-serif;
          letter-spacing: 2px;
        }
        .countdown-date {
          color: #8e6849;
          font: 10px Arial, sans-serif;
          letter-spacing: 3px;
        }
        .details { max-width: 850px; margin: auto; }
        .detail-card {
          max-width: 570px;
          margin: 35px auto 0;
          padding: 40px 20px;
          border: 1px solid #c2a27a;
          outline: 1px solid #c2a27a;
          outline-offset: 6px;
          background: #fffaf2;
        }
        .detail-icon { font-size: 27px; color: #ad8658; }
        .detail-label {
          color: #9b7955;
          font: 10px Arial, sans-serif;
          letter-spacing: 3px;
          margin-top: 12px;
        }
        .detail-card h3 {
          font-weight: normal;
          color: #692b40;
          font-size: 22px;
          margin: 20px 0 10px;
        }
        .detail-card p:not(.detail-label) {
          color: #806c5b;
          font-size: 14px;
          line-height: 2;
        }
        .detail-separator { color: #b28c61; margin: 30px; }
        .location-button { display: inline-block; margin-top: 20px; }
        .closing {
          background: #4b1d30;
          color: #f8e8d0;
        }
        .closing h2 { color: #f3dfc0; }
        .closing .overline, .closing .flower-divider { color: #d3b17f; }
        .closing > p:not(.overline) { color: #e4ceb1; }
        .closing-names { color: #e9c994; }
        .closing-date, .closing-blessing {
          font: 10px Arial, sans-serif !important;
          letter-spacing: 3px;
        }
        footer {
          text-align: center;
          padding: 25px 10px;
          color: #a58b70;
          background: #f8f2e9;
          font: 9px Arial, sans-serif;
          letter-spacing: 2px;
          line-height: 2.2;
        }
        .background-flower {
          position: absolute;
          color: #b58b64;
          opacity: .12;
          font-size: 100px;
          pointer-events: none;
        }
        .flower-one { top: 900px; left: -35px; }
        .flower-two { top: 1800px; right: -30px; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media(max-width: 550px) {
          .opening-frame { min-height: 520px; }
          .navigation { padding: 0 12px; }
          .navigation button { padding: 8px 5px; font-size: 8px; }
          .hero { min-height: 650px; }
          .section { padding: 65px 20px; }
          .timer-box { width: 75px; padding: 16px 5px; }
          .timer-box strong { font-size: 28px; }
          .timer-box span { font-size: 8px; letter-spacing: 1px; }
        }
      `}</style>
    </main>
  );
}
