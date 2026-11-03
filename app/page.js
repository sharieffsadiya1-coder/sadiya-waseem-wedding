
"use client";

import { useState } from "react";

export default function WeddingPage() {
  const [music, setMusic] = useState(false);

  const green = "#12382b";
  const gold = "#c6a34b";
  const cream = "#f7efd9";

  const nav = ["Home", "Families", "Event", "Venue", "Join us"];

  return (
    <main style={{ background: cream, color: green, fontFamily: "Georgia, serif" }}>

      {/* NAVIGATION */}
      <nav style={{
        background: green, color: gold, padding: "22px 5%",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 15
      }}>
        <i style={{ fontSize: 24 }}>Sadiya & Waseem</i>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {nav.map((item, i) => (
            <a key={item}
              href={"#" + ["home", "families", "event", "venue", "join"][i]}
              style={{ color: cream, textDecoration: "none" }}>
              {item}
            </a>
          ))}
        </div>

        <button onClick={() => setMusic(!music)}
          style={{ background: "transparent", color: gold, border: `1px solid ${gold}`, borderRadius: 50, padding: 10 }}>
          {music ? "♫ Music ON" : "♫ Music"}
        </button>
      </nav>

      {/* HOME */}
      <section id="home" style={{
        minHeight: "85vh", textAlign: "center", padding: "70px 20px",
        background: `linear-gradient(#12382bc9,#12382bd9), url('/garden.jpg') center/cover`,
        color: cream
      }}>
        <p style={{ fontSize: 34, color: gold }}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p style={{ marginTop: 45, fontSize: 22 }}>The Nikkah of</p>
        <h1 style={{ fontSize: "clamp(55px,10vw,100px)", fontWeight: 400, fontStyle: "italic", color: gold }}>
          Sadiya
        </h1>
        <p style={{ fontSize: 35, color: gold }}> & </p>
        <h1 style={{ fontSize: "clamp(45px,8vw,80px)", fontWeight: 400, fontStyle: "italic", color: gold }}>
          Waseem Ahamed
        </h1>
        <p style={{ fontSize: 23, marginTop: 35 }}>Sunday, 20 December 2026</p>
        <p>11:30 AM</p>
        <p>Kabba Convention Hall, Kolar</p>

        <div style={{ marginTop: 40 }}>
          <a href="#venue" style={buttonStyle}>View Venue</a>
          <a href="#join" style={{ ...buttonStyle, background: "transparent", color: gold, marginLeft: 12 }}>Join Us</a>
        </div>
      </section>

      {/* FAMILIES */}
      <section id="families" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={headingStyle}>The families</h2>

        <p style={{ fontSize: 26, lineHeight: 2, marginTop: 50 }}>
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
        </p>
        <p style={{ fontSize: 22 }}>وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>

        <p style={{ fontStyle: "italic", lineHeight: 2, maxWidth: 600, margin: "30px auto" }}>
          Among His signs is that He created mates for you from yourselves,
          so that you may find tranquility in them, and He placed between
          you affection and mercy. (Ar-Rum 30:21)
        </p>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 25, marginTop: 60 }}>
          <FamilyCard title="The groom" name="Waseem Ahamed" parents="Son of" />
          <FamilyCard title="The bride" name="Sadiya Siddequa" parents="Daughter of" />
        </div>
      </section>

      {/* EVENT */}
      <section id="event" style={{ background: green, color: cream, textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ ...headingStyle, color: gold }}>The Event</h2>
        <p style={{ fontSize: 30, marginTop: 40 }}>The Nikkah Ceremony</p>
        <p style={{ fontSize: 22 }}>Sunday, 20 December 2026</p>
        <p>11:30 AM</p>
        <p>With the blessings of Allah,</p>
        <p>we invite you to celebrate our special day.</p>
      </section>

      {/* VENUE */}
      <section id="venue" style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={headingStyle}>The Venue</h2>
        <p style={{ fontSize: 28, marginTop: 35 }}>Kabba Convention Hall</p>
        <p>St. Anne's High School, Near Bypass</p>
        <p>Kolar – 563101</p>
        <a href="https://www.google.com/maps/search/?api=1&query=Kabba+Convention+Hall+Kolar"
          target="_blank" style={buttonStyle}>Get Directions</a>
      </section>

      {/* JOIN US */}
      <section id="join" style={{ background: green, color: cream, textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ ...headingStyle, color: gold }}>Join us</h2>
        <p style={{ fontSize: 26, marginTop: 35 }}>Your presence is our blessing.</p>
        <p>We look forward to celebrating with you!</p>
        <p style={{ color: gold, fontSize: 30, fontStyle: "italic", marginTop: 40 }}>
          Sadiya & Waseem
        </p>
        <p>20 • 12 • 2026</p>
      </section>

      <footer style={{ textAlign: "center", padding: 25 }}>
        Made with love ♥
      </footer>
    </main>
  );
}

function FamilyCard({ title, name, parents }) {
  return (
    <div style={{
      border: "1px solid #c6a34b", outline: "1px solid #c6a34b",
      outlineOffset: 7, borderRadius: "180px 180px 0 0",
      width: 340, maxWidth: "85vw", minHeight: 270,
      padding: "80px 15px 25px", boxSizing: "border-box"
    }}>
      <p style={{ color: "#a88736" }}>{title}</p>
      <h3 style={{ fontSize: 28, fontStyle: "italic", fontWeight: 400 }}>{name}</h3>
      <p>{parents}</p>
      <p>Our beloved family</p>
    </div>
  );
}

const headingStyle = {
  fontSize: "clamp(40px,7vw,65px)",
  fontStyle: "italic",
  fontWeight: 400,
  color: "#a88736"
};

const buttonStyle = {
  display: "inline-block",
  padding: "15px 30px",
  borderRadius: 40,
  background: "#c6a34b",
  color: "#12382b",
  textDecoration: "none",
  marginTop: 20
};
