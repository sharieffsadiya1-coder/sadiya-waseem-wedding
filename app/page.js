
"use client";

import { useState } from "react";

export default function WeddingPage() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f8f1e8",
      color: "#765b43",
      textAlign: "center",
      padding: "50px 20px",
      fontFamily: "Georgia, serif"
    }}>
      <div style={{
        maxWidth: "650px",
        margin: "auto",
        border: "2px solid #c5a477",
        padding: "50px 25px",
        background: "#fffaf2"
      }}>
        <p style={{ letterSpacing: "5px" }}>
          TOGETHER WITH THEIR FAMILIES
        </p>

        <p style={{ fontSize: "35px" }}>❀</p>

        <p style={{ letterSpacing: "4px" }}>
          REQUEST THE PLEASURE OF YOUR COMPANY
        </p>

        <h1 style={{
          fontSize: "52px",
          fontWeight: "normal",
          fontStyle: "italic",
          margin: "30px 0"
        }}>
          Sadiya & Waseem
        </h1>

        <p style={{ fontSize: "19px" }}>
          Together with love, they begin forever.
        </p>

        <p style={{ fontSize: "30px" }}>♡</p>

        <p style={{ letterSpacing: "4px" }}>
          JOYFULLY INVITE YOU TO CELEBRATE
        </p>

        <h2 style={{ fontWeight: "normal" }}>
          Their Wedding
        </h2>

        <p>DECEMBER 2026</p>

        <p style={{ lineHeight: "2" }}>
          A beautiful new chapter begins.<br />
          We would love to celebrate this special day with you.
        </p>

        <button
          onClick={() => setOpened(!opened)}
          style={{
            background: "#96734f",
            color: "white",
            border: "none",
            padding: "15px 35px",
            cursor: "pointer",
            marginTop: "20px"
          }}
        >
          {opened ? "With Love ♡" : "Open Invitation"}
        </button>

        {opened && (
          <p style={{ marginTop: "25px" }}>
            Your presence will make our day even more special. ♡
          </p>
        )}

        <p style={{ marginTop: "50px" }}>
          WITH LOVE AND GRATITUDE
        </p>
        <p> SADIYA & WASEEM </p>
      </div>
    </main>
  );
}
