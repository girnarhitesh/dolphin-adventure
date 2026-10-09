import React from "react";
import "./FloatingCallButton.css";
import { MdPhone } from "react-icons/md";

const FloatingCallButton = () => {
    const phoneNumber = "+916397997489";

    return (
        <a 
            href={`tel:${phoneNumber}`} 
            className="floating-call-btn" 
            aria-label="Call WhyNotFly"
            title="Call Us"
        >
            <div className="pulse-layer"></div>
            <div className="icon-layer">
                <MdPhone size={24} />
            </div>
        </a>
    );
};

export default FloatingCallButton;
