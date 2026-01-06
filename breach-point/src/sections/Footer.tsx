import React from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT CORNER */}
        <div className="footer-left">
          <img
            src="/assets/siege-of-troy.png"
            alt="Breach Point CTF Logo"
            className="footer-logo"
          />

          <p className="footer-about">
            Breach Point is a national-level Capture The Flag competition focused
            on real-world cybersecurity challenges, analytical thinking, and
            ethical hacking practices.
          </p>
        </div>

        {/* RIGHT CORNER */}
        <div className="footer-right">
          <p className="footer-follow">Follow Us</p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/breach_point_ctf/"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram />
            </a>

            <a
              href="https://www.linkedin.com/company/breach-point-ctf/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>

            <a
              href="https://discord.gg/"
              target="_blank"
              aria-label="Discord"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-discord"
              >
                <path d="M9 12a2 2 0 0 1-2-2V6h4v4a2 2 0 0 1-2 2Z" style={{ display: 'none' }} />
                {/* Custom Path for Discord Brand Icon since generic one might not be in library */}
                <path d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3H14.4387C14.246 3.32933 14.0267 3.86133 13.8763 4.24133C12.2477 3.99867 10.6237 3.99867 9.02232 4.24133C8.87199 3.86133 8.65132 3.32933 8.46065 3H8.36565C6.84032 3.256 5.37899 3.71467 4.00499 4.34399C1.19232 8.46399 0.428323 12.5173 0.80399 16.5053C2.66832 17.868 4.45932 18.6947 6.22399 19.2333L6.46732 19.144C6.87965 18.5773 7.24832 17.9827 7.56832 17.3627L6.64965 16.9293C6.39099 17.0267 6.13099 17.112 5.86765 17.1853C5.97232 17.0187 6.07232 16.8493 6.16699 16.6787C9.37565 18.1493 12.6223 18.1493 15.7777 16.6787C15.8723 16.8493 15.9723 17.0187 16.077 17.1853C15.8137 17.112 15.5537 17.0267 15.295 16.9293L14.3763 17.3627C14.6963 17.9827 15.065 18.5773 15.4773 19.144L15.7207 19.2333C17.4853 18.6947 19.2763 17.868 21.1407 16.5053C21.571 11.956 20.3537 7.97333 18.8943 4.34399ZM7.97432 13.6227C6.91899 13.6227 6.04932 12.656 6.04932 11.472C6.04932 10.288 6.89699 9.32133 7.97432 9.32133C9.06365 9.32133 9.93099 10.288 9.91099 11.472C9.91099 12.656 9.06365 13.6227 7.97432 13.6227ZM14.9707 13.6227C13.9153 13.6227 13.0457 12.656 13.0457 11.472C13.0457 10.288 13.8933 9.32133 14.9707 9.32133C16.06 9.32133 16.9273 10.288 16.9073 11.472C16.9073 12.656 16.06 13.6227 14.9707 13.6227Z" />
              </svg>
            </a>

            <a
              href="mailto:breachpoint.ctf@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        © 2026 Breach Point CTF. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
