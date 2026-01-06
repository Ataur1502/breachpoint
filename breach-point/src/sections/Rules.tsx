import React from "react";
import "./Rules.css";

const Rules: React.FC = () => {
  return (
    <section className="rules" id="rules">
      <div className="rules-container">

        <h2 className="rules-title">Rules & Guidelines</h2>

        <div className="rules-content">
          <h3 className="rules-subtitle">Eligibility</h3>
          <ul>
            <li>The competition is open <strong>only to students</strong>.</li>
            <li>Participants must register as a <strong>team of 1 to 3 members</strong>.</li>
            <li>Each participant may be part of <strong>only one team</strong>.</li>
          </ul>

          <h3 className="rules-subtitle">Registration & Fees</h3>
          <ul>
            <li>The <strong>registration fee is ₹250 per team</strong>, regardless of whether the team has 1, 2, or 3 members.</li>
            <li>Registration is considered complete only after successful payment.</li>
            <li>Registration fees are <strong>non-refundable</strong>.</li>
          </ul>

          <h3 className="rules-subtitle">Event Structure</h3>
          <ul>
            <li>The <strong>online round</strong> will be conducted on <strong>February 14 and 15</strong> and will follow a <strong>Jeopardy-style CTF format</strong>, where teams solve independent challenges across multiple domains.</li>
            <li>Based on the online round leaderboard, the <strong>top 70 teams</strong> will be shortlisted.</li>
            <li>Shortlisted teams must <strong>submit detailed write-ups</strong> for the challenges they solved.</li>
            <li>From these submissions, the <strong>top 50 teams</strong> will qualify for the <strong>offline round</strong>.</li>
            <li>The <strong>offline round</strong> will be held on <strong>March 6 and 7</strong> and will be <strong>theme-based, inspired by the Siege of Troy</strong>, integrating narrative-driven challenges and scenario-based problem solving.</li>
          </ul>

          <h3 className="rules-subtitle">Write-up Submission</h3>
          <ul>
            <li>Write-ups must clearly explain the <strong>approach, tools, and methodology</strong> used to solve challenges.</li>
            <li>Plagiarized, AI-generated, or copied write-ups will result in <strong>immediate disqualification</strong>.</li>
            <li>Failure to submit write-ups within the given deadline will lead to <strong>disqualification</strong> from the offline round.</li>
          </ul>

          <h3 className="rules-subtitle">Fair Play & Conduct</h3>
          <ul>
            <li>Sharing flags, write-ups, or solutions during the competition is <strong>strictly prohibited</strong>.</li>
            <li>Any form of <strong>collaboration between teams</strong> is not allowed.</li>
            <li>Attacks against the CTF infrastructure or other teams are forbidden.</li>
            <li>Organizers reserve the right to <strong>monitor activity logs</strong> to ensure fair play.</li>
          </ul>

          <h3 className="rules-subtitle">General Rules</h3>
          <ul>
            <li>The decision of the organizers and judges will be <strong>final and binding</strong>.</li>
            <li>Rules may be updated if required; any changes will be communicated officially.</li>
            <li>Participation implies acceptance of all the above rules and guidelines.</li>
          </ul>
        </div>




      </div>
    </section>
  );
};

export default Rules;
