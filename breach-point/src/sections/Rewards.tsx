import React from "react";
import { Trophy, CheckCircle2 } from "lucide-react";
import "./rewards.css";

const Rewards: React.FC = () => {
    return (
        <section className="rewards" id="rewards">
            <div className="rewards-container">
                <div className="rewards-content">
                    {/* Left Side - Icon */}
                    <div className="rewards-left">
                        <div className="rewards-icon-wrapper">
                            <Trophy className="rewards-icon" />
                        </div>
                    </div>

                    {/* Right Side - Text */}
                    <div className="rewards-right">
                        <h2 className="rewards-title">
                            WIN <span className="highlight">BIG</span> REWARDS
                        </h2>

                        <div className="rewards-description">
                            <p>
                                Compete for a total prize pool worth <strong>₹1,00,000</strong>!
                                Top performers will receive exclusive perks.
                            </p>

                            <ul className="rewards-list">
                                <li>
                                    <CheckCircle2 className="check-icon" />
                                    <span>Cash Prizes worth ₹1 Lakh</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="check-icon" />
                                    <span>Certificates & Exclusive Badges</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="check-icon" />
                                    <span>Cyber-related Subscriptions</span>
                                </li>
                                <li>
                                    <CheckCircle2 className="check-icon" />
                                    <span>And much more...</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rewards;
