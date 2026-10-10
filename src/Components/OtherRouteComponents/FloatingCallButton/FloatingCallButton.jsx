import React from "react";
import "./FloatingCallButton.css";
import { MdPhone } from "react-icons/md";

const FloatingCallButton = () => {
    const phoneNumber = "+917201060500";

    return (
        <a 
            href={`tel:${phoneNumber}`} 
            className="floating-call-btn" 
            aria-label="Call Dolphin Adventure"
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
