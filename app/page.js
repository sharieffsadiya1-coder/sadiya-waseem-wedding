
"use client";

import { useEffect, useRef, useState } from "react";

export default function WeddingPage() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const audioRef = useRef(null);

  useEffect(() => {
    const weddingDate = new Date("2026-12-20T11:30:00+05:30");

    const updateCountdown = () => {
      const difference = weddingDate.getTime() - Date.now();
      const remaining = Math.max(0, difference);

      setTimeLeft({
        days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((remaining / (1000 * 60)) % 60),
        seconds: Math.floor((remaining / 1000) % 60)
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch {
      alert("We'll add your wedding music in the next step!");
    }
  };

  const gold = "#a17b50";

  return (
    <main style={{
      background: "#f8f3eb",
      color: "#66513e",
      fontFamily: "Georgia, serif",
      textAlign: "center",
      minHeight: "100vh",
      overflow: "hidden"
    }}>

      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />

      {/* Welcome screen */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "35px 18px",
        background: "radial-gradient(circle, #fffdf8, #eee2d1)"
      }}>
        <div style={{
          width: "100%",
          maxWidth: "650px",
          padding: "45px 22px",
          border: "1px solid #c9ad83",
          outline: "5px double #e1d0b8",
          outlineOffset: "-12px",
          background: "rgba(255,253,248,0.85)"
        }}>
          <div style={{ fontSize: "42px", color: gold }}>
            ❀ ✿ ❀
          </div>

          <p style={{
            letterSpacing: "4px",
            fontSize: "11px",
            marginTop: "25px"
          }}>
            TOGETHER WITH OUR FAMILIES
          </p>

          <p style={{
            fontSize: "19px",
            fontStyle: "italic",
            color: gold
          }}>
            We invite you to celebrate
          </p>

          <h1 style={{
            fontSize: "clamp(43px, 10vw, 72px)",
            lineHeight: "1.25",
            fontWeight: "normal",
            fontStyle: "italic",
            color: "#96734f",
            margin: "25px 0"
          }}>
            Sadiya
            <br />
            <span style={{ fontSize: "35px" }}>&</span>
            <br />
            Waseem
          </h1>

          <div style={{ fontSize: "30px", color: gold }}>❦</div>

          <p style={{
            letterSpacing: "3px",
            fontSize: "12px",
            marginTop: "25px"
          }}>
            SUNDAY · 20 DECEMBER 2026
          </p>

          <p style={{ fontStyle: "italic", fontSize: "16px" }}>
            A lifetime begins with a beautiful moment
          </p>

          <button
            onClick={() => {
              setOpened(true);
              setTimeout(() => {
                document.getElementById("invitation")?.scrollIntoView({
                  behavior: "smooth"
                });
              }, 100);
            }}
            style={{
              marginTop: "25px",
              padding: "16px 30px",
              background: gold,
              color: "white",
              border: "none",
              letterSpacing: "2px",
              cursor: "pointer",
              fontFamily: "Georgia, serif"
            }}
          >
            OPEN INVITATION ♡
          </button>

          <p style={{
            fontSize: "11px",
            letterSpacing: "3px",
            marginTop: "35px",
            color: gold
          }}>
            WITH LOVE, SADIYA & WASEEM
          </p>
        </div>
      </section>

      {/* Invitation details */}
      <section
        id="invitation"
        style={{
          padding: "75px 20px",
          background: "#fffdf8"
        }}
      >
        <div style={{ fontSize: "38px", color: gold }}>❀</div>

        <p style={{ letterSpacing: "4px", fontSize: "11px" }}>
          THE BEGINNING OF FOREVER
        </p>

        <h2 style={{
          fontSize: "35px",
          fontWeight: "normal",
          fontStyle: "italic",
          color: gold
        }}>
          With joyful hearts
        </h2>

        <p style={{
          maxWidth: "480px",
          margin: "25px auto",
          lineHeight: "2",
          fontSize: "16px"
        }}>
          We request the pleasure of your company and blessings
          as we begin our beautiful journey together.
          Your presence will make our special day even more memorable.
        </p>

        <div style={{
          maxWidth: "500px",
          margin: "45px auto",
          padding: "30px 15px",
          borderTop: "1px solid #d8c4a7",
          borderBottom: "1px solid #d8c4a7"
        }}>
          <p style={{ letterSpacing: "3px", fontSize: "12px" }}>
            SAVE THE DATE
          </p>

          <h2 style={{
            fontSize: "38px",
            fontWeight: "normal",
            color: gold
          }}>
            20 · 12 · 2026
          </h2>

          <p style={{ fontSize: "18px" }}>Sunday | 11:30 AM</p>
        </div>

        <div style={{ fontSize: "32px", color: gold }}>❦</div>
      </section>

      {/* Countdown */}
      <section style={{
        padding: "65px 15px",
        background: "#eee4d6"
      }}>
        <p style={{ letterSpacing: "4px", fontSize: "11px" }}>
          COUNTING DOWN TO OUR BIG DAY
        </p>

        <h2 style={{
          fontSize: "32px",
          fontStyle: "italic",
          fontWeight: "normal",
          color: gold
        }}>
          Until we say "I do"
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginTop: "30px"
        }}>
          {[
            ["DAYS", timeLeft.days],
            ["HOURS", timeLeft.hours],
            ["MINUTES", timeLeft.minutes],
            ["SECONDS", timeLeft.seconds]
          ].map(([label, value]) => (
            <div key={label} style={{
              background: "#fffdf8",
              padding: "18px 12px",
              minWidth: "65px",
              border: "1px solid #d7c2a5"
            }}>
              <div style={{
                fontSize: "29px",
                color: gold
              }}>
                {String(value).padStart(2, "0")}
              </div>
              <div style={{
                fontSize: "9px",
                letterSpacing: "1px",
                marginTop: "7px"
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Venue */}
      <section style={{
        padding: "75px 20px",
        background: "#fffdf8"
      }}>
        <div style={{ fontSize: "38px", color: gold }}>✿</div>

        <p style={{ letterSpacing: "4px", fontSize: "11px" }}>
          JOIN US AT
        </p>

        <h2 style={{
          fontSize: "34px",
          fontStyle: "italic",
          fontWeight: "normal",
          color: gold
        }}>
          The Wedding Venue
        </h2>

        <h3 style={{ fontSize: "22px", fontWeight: "normal" }}>
          Kabba Convention Hall
        </h3>

        <p style={{ lineHeight: "2", fontSize: "15px" }}>
          St. Anne's High School,
          <br />
          Near Bypass,
          <br />
          Kolar – 563101
        </p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Kabba+Convention+Hall+St+Annes+High+School+Near+Bypass+Kolar+563101"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "14px 25px",
            background: gold,
            color: "white",
            textDecoration: "none",
            letterSpacing: "1px",
            fontSize: "12px"
          }}
        >
          VIEW LOCATION ON MAP
        </a>
      </section>

      {/* Contacts */}
      <section style={{
        padding: "65px 20px",
        background: "#eee4d6"
      }}>
        <div style={{ fontSize: "35px", color: gold }}>❀</div>

        <h2 style={{
          fontSize: "31px",
          fontStyle: "italic",
          fontWeight: "normal"
        }}>
          We would love to hear from you
        </h2>

        <p style={{ letterSpacing: "2px", fontSize: "11px" }}>
          FOR ANY QUERIES
        </p>

        <p style={{ marginTop: "25px" }}>
          <a href="tel:+916360021841" style={{ color: gold }}>
            +91 63600 21841
          </a>
        </p>

        <p>
          <a href="tel:7893406576" style={{ color: gold }}>
            7893406576
          </a>
        </p>

        <button
          onClick={toggleMusic}
          style={{
            marginTop: "25px",
            padding: "14px 25px",
            background: "#987b59",
            color: "white",
            border: "none",
            cursor: "pointer",
            letterSpacing: "1px",
            fontFamily: "Georgia, serif"
          }}
        >
          {playing ? "Ⅱ PAUSE MUSIC" : "♫ PLAY WEDDING MUSIC"}
        </button>

        <div style={{
          fontSize: "38px",
          color: gold,
          marginTop: "45px"
        }}>
          ❀ ❦ ❀
        </div>

        <p style={{
          letterSpacing: "3px",
          fontSize: "11px"
        }}>
          FOREVER BEGINS HERE
        </p>

        <p style={{
          fontStyle: "italic",
          fontSize: "18px",
          color: gold
        }}>
          Sadiya & Waseem
        </p>
      </section>
    </main>
  );
}
