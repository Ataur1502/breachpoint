import React from "react";
import "./eventdetails.css";

const EventDetails: React.FC = () => {
  return (
    <section className="event-details" id="details">
      <div className="event-container">
        <h2 className="event-title">Event Details</h2>

        <div className="event-grid">
          {/* Left: Details */}
          <div className="event-info">
            <ul>
              <li>
                <span>Format</span>
                <p>Team-based Capture The Flag (2–3 members)</p>
              </li>

              <li>
                <span>Online Round</span>
                <p>14th & 15th February 2026</p>
              </li>

              <li>
                <span>Offline Finals</span>
                <p>6th & 7th March 2026</p>
              </li>

              <li>
                <span>Location</span>
                <p>Malla Reddy University, Hyderabad</p>
              </li>

              <li>
                <span>Domains</span>
                <p>
                  Web Security, API Security, Cryptography, Reverse Engineering,
                  Digital Forensics, OSINT, Miscellaneous
                </p>
              </li>

              <li>
                <span>Shortlisting</span>
                <p>Top teams selected based on score and writeups</p>
              </li>
            </ul>
          </div>

          {/* Right: Map */}
          <div className="event-map">
            <iframe
              title="Malla Reddy University Location"
              src="https://www.google.com/maps?q=Malla+Reddy+University+Hyderabad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
