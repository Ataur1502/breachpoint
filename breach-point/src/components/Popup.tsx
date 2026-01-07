import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after a short delay or immediately when mounted
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Small delay for smooth entrance after preloader

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close-btn" onClick={handleClose}>
                    &times;
                </button>
                <div className="popup-image-container">
                    <img src="/assets/popup.jpeg" alt="Popup Image" className="popup-image" />
                </div>
            </div>
        </div>
    );
};

export default Popup;
