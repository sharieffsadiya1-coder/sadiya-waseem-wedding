
"use client";

import { useState } from "react";

export default function WeddingPage() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={{
      background: "#f8f3eb",
      minHeight: "100vh",
      padding: "30px 15px",
      color: "#66513e",
      textAlign: "center",
      fontFamily: "Georgia, serif"
    }}>
      <div style={{
        maxWidth: "720px",
        margin: "auto",
        background: "#fffdf8",
        border: "1px solid #c9ad83",
        padding: "45px 22px",
        boxShadow: "0 8px 30px rgba(100,70,40,0.10)"
      }}>
        <div style={{ fontSize: "42px", color: "#b18b61" }}>❀</div>

        <p style={{ letterSpacing: "4px", fontSize: "11px" }}>
          A BEAUTIFUL BEGINNING
        </p>

        <p style={{ fontSize: "18px", color: "#b18b61" }}>
          Together with our families
        </p>

        <h1 style={{
          fontSize: "clamp(38px, 9vw, 65px)",
          fontWeight: "normal",
          fontStyle: "italic",
          color: "#9b7957",
          margin: "25px 0"
        }}>
          Sadiya
          <br />
          <span style={{ fontSize: "32px" }}>&</span>
          <br />
          Waseem
        </h1>

        <div style={{ fontSize: "30px", color: "#b99b76" }}>❦</div>

        <p style={{
          letterSpacing: "2px",
          fontSize: "12px",
          lineHeight: "2"
        }}>
          REQUEST THE PLEASURE OF YOUR COMPANY
          <br />
          AS WE CELEBRATE OUR WEDDING
        </p>

        <div style={{
          margin: "30px auto",
          borderTop: "1px solid #d7c2a5",
          borderBottom: "1px solid #d7c2a5",
          padding: "20px"
        }}>
          <h2 style={{
            fontWeight: "normal",
            fontStyle: "italic",
            fontSize: "30px"
          }}>
            Save the Date
          </h2>

          <p style={{ letterSpacing: "2px", fontSize: "17px" }}>
            SUNDAY, 20 DECEMBER 2026
          </p>

          <p style={{ fontSize: "18px" }}>11:30 AM</p>
          <p style={{ fontSize: "13px" }}>
            A new chapter. A lifetime of love.
          </p>
        </div>

        <p style={{ fontSize: "15px", lineHeight: "2" }}>
          With hearts full of gratitude,
          <br />
          we invite you to be part of
          <br />
          our most special day.
        </p>

        <button
          onClick={() => setOpened(!opened)}
          style={{
            marginTop: "25px",
            padding: "15px 30px",
            background: "#987b59",
            color: "white",
            border: "none",
            letterSpacing: "2px",
            cursor: "pointer"
          }}
        >
          {opened ? "CLOSE ♡" : "OPEN INVITATION ♡"}
        </button>

        {opened && (
          <div style={{
            marginTop: "25px",
            padding: "25px 15px",
            background: "#f8f1e7",
            lineHeight: "1.8"
          }}>
            <h2 style={{ fontStyle: "italic" }}>
              With Love & Joy
            </h2>

            <p>
              Your presence and blessings would mean the world to us.
              We cannot wait to celebrate this special day with you!
            </p>

            <div style={{ fontSize: "28px", color: "#b18b61" }}>
              ❀ ❦ ❀
            </div>
          </div>
        )}

        <div style={{
          marginTop: "40px",
          borderTop: "1px solid #d7c2a5",
          paddingTop: "25px"
        }}>
          <h2 style={{
            fontSize: "27px",
            fontWeight: "normal",
            fontStyle: "italic"
          }}>
            Wedding Venue
          </h2>

          <h3 style={{ color: "#987b59" }}>
            Kabba Convention Hall
          </h3>

          <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
            St. Anne's High School,
            <br />
            Near Bypass,
            <br />
            Kolar – 563101
          </p>

          <p style={{
            marginTop: "30px",
            fontSize: "12px",
            letterSpacing: "2px"
          }}>
            FOR QUERIES & DETAILS
          </p>

          <p>
            <a href="tel:+916360021841" style={{ color: "#987b59" }}>
              +91 63600 21841
            </a>
          </p>

          <p>
            <a href="tel:7893406576" style={{ color: "#987b59" }}>
              7893406576
            </a>
          </p>
        </div>

        <div style={{
          marginTop: "40px",
          fontSize: "32px",
          color: "#b18b61"
        }}>
          ❀ ❦ ❀
        </div>

        <p style={{ letterSpacing: "3px", fontSize: "11px" }}>
          FOREVER BEGINS HERE
        </p>
      </div>
    </main>
  );
}
