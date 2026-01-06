import React from "react";
import "./Sponsors.css";

interface SponsorSlotProps {
  imagePath?: string;
  altText?: string;
}

const SponsorSlot: React.FC<SponsorSlotProps> = ({
  imagePath,
  altText = "Sponsor Logo",
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mouse-x", `${clientX - left}px`);
    currentTarget.style.setProperty("--mouse-y", `${clientY - top}px`);
  };

  return (
    <div className="sponsor-card" onMouseMove={handleMouseMove}>
      <img
        src={imagePath || "/sponsors/sponsors.png"}
        alt={altText}
        className="sponsor-logo"
      />
    </div>
  );
};

const Sponsors: React.FC = () => {
  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors-container">
        <h2 className="sponsors-title">Sponsors & Partners</h2>

        {/* Title Sponsor */}
        <div className="sponsor-tier">
          <h3 className="tier-title">Title Sponsor</h3>
          <div className="sponsor-grid">
            <SponsorSlot />
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="sponsor-tier">
          <h3 className="tier-title">Gold Sponsors</h3>
          <div className="sponsor-grid">
            <SponsorSlot />
            <SponsorSlot />
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="sponsor-tier">
          <h3 className="tier-title">Silver Sponsors</h3>
          <div className="sponsor-grid">
            <SponsorSlot />
            <SponsorSlot />
            <SponsorSlot />
          </div>
        </div>

        {/* Service Partners and host sponsor */}
        {/* Two-column layout for Service and Host */}
        <div className="sponsor-row">
          {/* Service Partners */}
          <div className="sponsor-tier half-width">
            <h3 className="tier-title">Service Partners</h3>
            <div className="sponsor-grid single-item">
              <SponsorSlot imagePath="/sponsors/community/hackculture.png" />
            </div>
          </div>

          {/* Host Sponsor */}
          <div className="sponsor-tier half-width">
            <h3 className="tier-title">Host</h3>
            <div className="sponsor-grid single-item">
              <SponsorSlot imagePath="/sponsors/mallareddy_university.png" />
            </div>
          </div>
        </div>

        <p className="sponsor-note">
          Interested in supporting a national-level cybersecurity event?
          Reach out to the organizing team.
        </p>
      </div>
    </section>
  );
};

export default Sponsors;
