import React from "react";
import { ArrowRight, Lock } from "lucide-react";
import "./register.css";

const Register: React.FC = () => {
    return (
        <section className="register" id="register">
            <div className="register-container">

                <div className="register-content">
                    <div className="register-icon-wrapper">
                        <Lock className="register-icon" />
                    </div>

                    <h2 className="register-title">
                        SECURE YOUR <span className="highlight">SPOT</span>
                    </h2>

                    <p className="register-text">
                        The battlefield awaits. Will you breach the perimeter?
                        <br />
                        Registration Fee is 250 rupees.
                    </p>

                    <a href="https://hackculture.io/hackathons/breach-point-season-1" target="_blank" rel="noopener noreferrer" className="register-btn">
                        <span>REGISTER NOW</span>
                        <ArrowRight className="btn-icon" />
                    </a>


                </div>

            </div>
        </section>
    );
};

export default Register;
