import React, { useEffect, useState } from "react";
import "./preloader.css";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time (e.g., 2.5 seconds)
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 500); // Wait for fade-out transition
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`preloader ${!loading ? "fade-out" : ""}`}>
            <div className="loader-content">
                <div className="glitch-wrapper">
                    <div className="glitch" data-text="INITIALIZING...">INITIALIZING...</div>
                </div>
                <div className="loader-bar">
                    <div className="loader-progress"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
