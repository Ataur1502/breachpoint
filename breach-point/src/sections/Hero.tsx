import React from "react";
import Countdown from "../components/countdown";
import MatrixRain from "../components/matrixrain";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <MatrixRain />

      <div className="hero-overlay">
        <div className="hero-content">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* Line 1 */}
          <p className="hero-uni-line">
            Malla Reddy University Dept of Cyber Security School of Engineering
            <br></br>presents
          </p>
          <br></br>
          <p className="hero-season-line">
            BREACH POINT
          </p>

          <h1 className="hero-main-title">
            <span className="hero-title-line">
              24 HOUR NATIONAL LEVEL CTF
            </span>
            <span className="hero-title-line">
              CHALLENGE
            </span>
          </h1>

          {/* Partners Section */}
          <div className="hero-partners">
            {/* Left: Powered By */}
            <div className="partner-block left">
              <span><h2>POWERED BY</h2></span>
              <img src="/sponsors/community/hackculture.png" alt="HackCulture" />
            </div>


          </div>


          {/* Theme */}
          <h4 className="hero-theme-label">THEME</h4>

          {/* Troy Image */}
          <img src="/assets/siege-of-troy.png" alt="Siege of Troy" className="hero-theme-image" />

          <Countdown targetDate="2026-02-14T10:00:00" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
    </section>
  );
};

export default Hero;
