import React from "react";
import { Linkedin, Mail, Crown, Terminal, HeartHandshake, Megaphone, Handshake } from "lucide-react";
import "./team.css";

const Team: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mouse-x", `${clientX - left}px`);
    currentTarget.style.setProperty("--mouse-y", `${clientY - top}px`);
  };

  return (
    <section className="team" id="team">
      <div className="team-container">

        <h2 className="team-title">Organizing Team</h2>

        {/* TECH TEAM */}
        <h3 className="team-subtitle">Technical Team</h3>
        <div className="team-grid tech-grid">

          <div className="team-card" onMouseMove={handleMouseMove}>
            <div className="team-icon">
              <Crown />
            </div>

            <h3 className="team-name">Ashrith Peechara</h3>
            <p className="team-role">Event Lead & Challenge Author</p>

            <div className="team-socials">
              <a href="https://www.linkedin.com/in/ashrith-peechara-a60a862b6" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:ashrithpeechara61@gmail.com">
                <Mail />
              </a>
            </div>
          </div>

          <div className="team-card" onMouseMove={handleMouseMove}>
            <div className="team-icon">
              <Terminal />
            </div>

            <h3 className="team-name">Syed Ata Ur Rahaman</h3>
            <p className="team-role">Technical & Operations Lead & Challenge Author</p>

            <div className="team-socials">
              <a href="https://www.linkedin.com/in/syed-ata-ur-rahaman-695744280" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:syedataurrahaman1502@gmail.com">
                <Mail />
              </a>
            </div>
          </div>

        </div>

        {/* NON-TECH TEAM */}
        <h3 className="team-subtitle">Operations & Outreach</h3>
        <div className="team-grid nontech-grid">

          <div className="team-card" onMouseMove={handleMouseMove}>
            <div className="team-icon">
              <HeartHandshake />
            </div>

            <h3 className="team-name">Likith Renikunta</h3>
            <p className="team-role">Community & Participant Experience Lead</p>

            <div className="team-socials">
              <a href="https://www.linkedin.com/in/likith-renikunta-52258624b" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:likithbas@gmail.com">
                <Mail />
              </a>
            </div>
          </div>

          <div className="team-card" onMouseMove={handleMouseMove}>
            <div className="team-icon">
              <Megaphone />
            </div>

            <h3 className="team-name">C. Bharat Varma</h3>
            <p className="team-role">Sponsorships & Outreach</p>

            <div className="team-socials">
              <a href="https://www.linkedin.com/in/app-le" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:bharat@example.com">
                <Mail />
              </a>
            </div>
          </div>

          <div className="team-card" onMouseMove={handleMouseMove}>
            <div className="team-icon">
              <Handshake />
            </div>

            <h3 className="team-name">Sai Harshal Gorrela</h3>
            <p className="team-role">Sponsorship & Partnerships Lead</p>

            <div className="team-socials">
              <a href="https://www.linkedin.com/in/sai-harshal-gorrela-620648354" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:saiharshal231224@gmail.com">
                <Mail />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Team;
