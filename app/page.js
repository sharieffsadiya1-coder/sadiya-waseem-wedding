
"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const audioRef = useRef(null);

  useEffect(() => {
    const target = new Date("2026-12-20T11:30:00+05:30");

    const updateCountdown = () => {
      const diff = target.getTime() - Date.now();
      const safe = Math.max(0, diff);

      setTimeLeft({
        days: Math.floor(safe / 86400000),
        hours: Math.floor((safe / 3600000) % 24),
        minutes: Math.floor((safe / 60000) % 60),
        seconds: Math.floor((safe / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        alert("Please add your music file to the public folder first.");
      }
    }
  };

  return (
    <main className="wedding">
      <audio ref={audioRef} src="/music.mp3" loop />

      <div className="glow" />

      {!opened ? (
        <section className="cover">
          <div className="corner top-left">❧</div>
          <div className="corner top-right">❧</div>
          <div className="corner bottom-left">❧</div>
          <div className="corner bottom-right">❧</div>

          <div className="cover-content">
            <p className="eyebrow">TOGETHER WITH OUR FAMILIES</p>
            <div className="ornament">✦ ─── ❀ ─── ✦</div>
            <p className="small-title">THE WEDDING CELEBRATION OF</p>

            <h1>Sadiya</h1>
            <div className="ampersand">&</div>
            <h1>Waseem</h1>

            <div className="ornament">✦ ─── ❀ ─── ✦</div>
            <p className="cover-date">20 · DECEMBER · 2026</p>

            <button className="open-button" onClick={() => setOpened(true)}>
              OPEN INVITATION <span>✧</span>
            </button>

            <p className="bottom-note">A beautiful beginning, by the grace of Allah</p>
          </div>
        </section>
      ) : (
        <>
          <header className="hero">
            <p className="eyebrow">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            <div className="ornament">✦ ❀ ✦</div>
            <p className="small-title">WITH THE BLESSINGS OF ALLAH</p>
            <h1>Sadiya <span>&</span> Waseem</h1>
            <p className="hero-text">
              Two hearts, one beautiful journey.
              <br />
              We invite you to celebrate our special day.
            </p>
            <div className="gold-line" />
            <p className="cover-date">SUNDAY · 20 DECEMBER 2026</p>
          </header>

          <section className="invitation section">
            <p className="eyebrow">A JOYOUS OCCASION</p>
            <div className="ornament">❀</div>
            <h2>With love & gratitude</h2>
            <p>
              With the blessings of Allah and the love of our families,
              we request the pleasure of your company as we begin
              our new chapter together.
            </p>
            <div className="names">Sadiya & Waseem</div>
            <p className="dua">
              May Allah bless our union with love, mercy and happiness.
            </p>
          </section>

          <section className="countdown-section section">
            <p className="eyebrow">SAVE THE DATE</p>
            <h2>Counting down to forever</h2>
            <div className="countdown">
              {["days", "hours", "minutes", "seconds"].map((item) => (
                <div className="count-box" key={item}>
                  <strong>{timeLeft[item] ?? "00"}</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="date-line">20 December 2026 · 11:30 AM</p>
          </section>

          <section className="venue section">
            <p className="eyebrow">JOIN US FOR THE CELEBRATION</p>
            <div className="ornament">✧ ❀ ✧</div>
            <h2>The Wedding</h2>
            <h3>Kabba Convention Hall</h3>
            <p>
              St. Anne's High School, Near Bypass,
              <br />
              Kolar – 563101
            </p>
            <p className="date-line">Sunday, 20 December 2026</p>
            <p className="date-line">11:30 AM</p>

            <a
              className="gold-button"
              href="https://www.google.com/maps/search/?api=1&query=Kabba+Convention+Hall+St+Annes+High+School+Near+Bypass+Kolar+563101"
              target="_blank"
              rel="noreferrer"
            >
              VIEW LOCATION ↗
            </a>
          </section>

          <section className="contact section">
            <div className="ornament">❀</div>
            <h2>We look forward to seeing you</h2>
            <p>Your presence and duas mean the world to us.</p>
            <p className="eyebrow">FOR ANY QUERIES</p>
            <div className="contacts">
              <a href="tel:+916360021841">+91 63600 21841</a>
              <a href="tel:7893406576">7893406576</a>
            </div>
            <div className="ornament">✦ ─── ❀ ─── ✦</div>
            <p className="footer-names">Sadiya & Waseem</p>
            <p className="footer-date">20 · 12 · 2026</p>
          </section>

          <button className="music-button" onClick={toggleMusic}>
            {playing ? "Ⅱ PAUSE MUSIC" : "♫ PLAY MUSIC"}
          </button>
        </>
      )}

      <style jsx global>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #f6eee5;
          color: #4c1826;
          font-family: Georgia, "Times New Roman", serif;
        }

        .wedding {
          min-height: 100vh;
          overflow: hidden;
          background: #f6eee5;
          position: relative;
        }

        .cover {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 55px 22px;
          position: relative;
          color: #f8e9d1;
          background:
            radial-gradient(ellipse at center, #782d40 0%, #4c1728 65%, #2e101b 100%);
        }

        .cover:before, .cover:after {
          content: "";
          position: absolute;
          inset: 18px;
          border: 1px solid #c8a66c;
          pointer-events: none;
        }

        .cover:after {
          inset: 25px;
          border-color: rgba(200,166,108,.35);
        }

        .corner {
          position: absolute;
          color: #d8b77c;
          font-size: 54px;
          line-height: 1;
        }

        .top-left { top: 35px; left: 35px; }
        .top-right { top: 35px; right: 35px; transform: scaleX(-1); }
        .bottom-left { bottom: 35px; left: 35px; transform: scaleY(-1); }
        .bottom-right { bottom: 35px; right: 35px; transform: scale(-1); }

        .cover-content { max-width: 650px; width: 100%; position: relative; z-index: 1; }

        .eyebrow {
          font-family: Arial, sans-serif;
          letter-spacing: 4px;
          font-size: 10px;
          line-height: 1.8;
          color: #ad8751;
        }

        .cover .eyebrow, .cover .small-title { color: #e1c798; }

        .small-title {
          font-family: Arial, sans-serif;
          letter-spacing: 3px;
          font-size: 10px;
          margin: 25px 0;
        }

        .cover h1 {
          font-size: clamp(58px, 12vw, 100px);
          font-weight: normal;
          font-style: italic;
          line-height: .95;
          margin: 12px 0;
          color: #f5dfbd;
        }

        .ampersand {
          font-size: 36px;
          font-style: italic;
          color: #d7b77d;
          margin: 15px 0;
        }

        .ornament {
          color: #b88c51;
          font-size: 22px;
          margin: 25px 0;
          letter-spacing: 4px;
        }

        .cover .ornament { color: #d9b879; }

        .cover-date {
          letter-spacing: 4px;
          font-family: Arial, sans-serif;
          font-size: 11px;
          color: #e7d1ad;
          margin: 28px 0;
        }

        .open-button, .gold-button {
          display: inline-block;
          border: 1px solid #d5b477;
          background: transparent;
          color: #f3dfbd;
          padding: 16px 30px;
          letter-spacing: 3px;
          font-size: 10px;
          cursor: pointer;
          text-decoration: none;
          transition: .3s;
        }

        .open-button:hover, .gold-button:hover {
          background: #d5b477;
          color: #421725;
        }

        .open-button span { margin-left: 12px; }
        .bottom-note { color: #d7bd9c; font-size: 12px; font-style: italic; margin-top: 40px; }

        .hero {
          text-align: center;
          padding: 100px 22px 90px;
          color: #f5e6d0;
          background: linear-gradient(140deg, #35121f, #702b3e, #3b1422);
          position: relative;
        }

        .hero h1 {
          font-size: clamp(42px, 9vw, 78px);
          font-weight: normal;
          font-style: italic;
          margin: 22px 0;
          color: #f3dfbd;
        }

        .hero h1 span { color: #c9a66b; }
        .hero-text { color: #ead8c0; font-size: 16px; line-height: 2; }
        .gold-line { width: 75px; height: 1px; background: #c9a66b; margin: 30px auto; }

        .section {
          text-align: center;
          padding: 75px 22px;
          max-width: 850px;
          margin: auto;
        }

        .section h2 {
          font-size: clamp(30px, 6vw, 43px);
          font-weight: normal;
          font-style: italic;
          color: #541d2d;
          margin: 15px 0 25px;
        }

        .invitation p:not(.eyebrow):not(.dua) {
          max-width: 570px;
          margin: 20px auto;
          color: #755c52;
          font-size: 16px;
          line-height: 2;
        }

        .names {
          color: #9c7040;
          font-size: 35px;
          font-style: italic;
          margin: 30px 0;
        }

        .dua { color: #9c7040; font-style: italic; font-size: 14px; }

        .countdown-section {
          max-width: none;
          background: #eadbc9;
          padding: 75px 15px;
        }

        .countdown {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 35px auto;
        }

        .count-box {
          width: 105px;
          padding: 20px 8px;
          border: 1px solid #b38b59;
          background: rgba(255,255,255,.25);
        }

        .count-box strong {
          display: block;
          font-size: 35px;
          font-weight: normal;
          color: #581e30;
        }

        .count-box span {
          display: block;
          text-transform: uppercase;
          letter-spacing: 2px;
          font: 9px Arial, sans-serif;
          color: #88694c;
          margin-top: 8px;
        }

        .date-line {
          color: #946b43;
          letter-spacing: 2px;
          font-size: 12px;
          margin: 20px 0;
        }

        .venue {
          padding-top: 90px;
          padding-bottom: 90px;
        }

        .venue h3 {
          color: #8e633d;
          font-size: 24px;
          font-weight: normal;
          margin-top: 35px;
        }

        .venue p:not(.eyebrow):not(.date-line) {
          color: #755c52;
          line-height: 2;
        }

        .gold-button {
          background: #571d30;
          color: #f7e8d1;
          margin-top: 20px;
        }

        .contact {
          max-width: none;
          background: #3d1524;
          color: #f4e5cf;
          padding: 75px 20px;
        }

        .contact h2 { color: #f1dfc2; }
        .contact p { color: #d8c0a1; line-height: 1.8; }
        .contact .eyebrow { margin-top: 35px; }

        .contacts {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          margin: 25px 0;
        }

        .contacts a {
          color: #f1d9ae;
          border-bottom: 1px solid #b38b59;
          padding: 8px;
          text-decoration: none;
        }

        .footer-names { font-size: 30px; font-style: italic; }
        .footer-date { letter-spacing: 4px; font-size: 10px; }

        .music-button {
          position: fixed;
          bottom: 18px;
          right: 18px;
          z-index: 5;
          border: 1px solid #d4b47c;
          border-radius: 30px;
          padding: 13px 19px;
          color: #f5e4c8;
          background: #501a2c;
          font-size: 10px;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 5px 20px #0002;
        }

        @media (max-width: 500px) {
          .corner { font-size: 35px; }
          .top-left { top: 35px; left: 28px; }
          .top-right { top: 35px; right: 28px; }
          .bottom-left { bottom: 35px; left: 28px; }
          .bottom-right { bottom: 35px; right: 28px; }
          .section { padding: 60px 20px; }
          .count-box { width: 76px; padding: 16px 5px; }
          .count-box strong { font-size: 27px; }
          .hero { padding: 80px 18px; }
        }
      `}</style>
    </main>
  );
}
