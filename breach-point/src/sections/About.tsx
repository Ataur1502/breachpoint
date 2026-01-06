import React from "react";
import {
  Zap,
  Shield,
  Cpu,
  Globe,
  KeyRound,
  Bug,
  Eye,
  Phone,
  Mic,
  Brackets,
} from "lucide-react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* WHY PARTICIPATE */}
        <div className="about-split">
          <div className="about-text">
            <h2 className="about-title">Why Participate</h2>
            <p>
              Breach Point is a hands-on cybersecurity competition designed to
              simulate real-world attack and defense scenarios. Participants
              will test their analytical thinking, problem-solving ability, and
              technical depth under pressure.
            </p>

            <ul>
              <li>Real-world cyber warfare challenges</li>
              <li>National-level exposure</li>
              <li>Write-up based fair evaluation</li>
              <li>Recognition and rewards</li>
            </ul>
          </div>

          <div className="about-icon">
            <Zap size={140} />
          </div>
        </div>

        {/* HOW DIFFERENT */}
        <div className="about-split">
          <div className="about-icon">
            <Shield size={140} />
          </div>

          <div className="about-text">
            <h2 className="about-title">How This CTF Is Different</h2>
            <p>
              Unlike traditional contests, Breach Point focuses on practical
              exploitation, analytical reasoning, and documentation. Challenges
              are story-driven and aligned with the Siege of Troy theme.
            </p>

            <ul>
              <li>Story-driven Siege of Troy theme</li>
              <li>Balanced difficulty for all skill levels</li>
              <li>Shortlisting based on score and write-ups</li>
              <li>Online qualifiers and offline finals</li>
            </ul>
          </div>
        </div>

        {/* DOMAINS */}
        <h2 className="about-title center">Domains of Battle</h2>

        <div className="domain-grid">
          <div className="domain-card">
            <Shield />
            <h3>The Gates of Troy</h3>
            <p>Web Security</p>
          </div>

          <div className="domain-card">
            <Globe />
            <h3>The Watchtowers</h3>
            <p>OSINT</p>
          </div>

          <div className="domain-card">
            <KeyRound />
            <h3>The Cipher Scrolls</h3>
            <p>Cryptography</p>
          </div>

          <div className="domain-card">
            <Bug />
            <h3>The Wooden Horse</h3>
            <p>API Security</p>
          </div>

          <div className="domain-card">
            <Cpu />
            <h3>The War Machines</h3>
            <p>Reverse Engineering</p>
          </div>

          <div className="domain-card">
            <Eye />
            <h3>The Fallen Battlefield</h3>
            <p>Digital Forensics</p>
          </div>

          <div className="domain-card">
            <Phone />
            <h3>The Hand of Zeus</h3>
            <p>Mobile Security</p>
          </div>
          <div className="domain-card">
            <Brackets />
            <h3>The Hidden Trophies</h3>
            <p>Steganography</p>
          </div>

          <div className="domain-card">
            <Mic />
            <h3>Burning Legacy</h3>
            <p>Miscellaneous</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
